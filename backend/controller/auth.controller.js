const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const UserModel = require("../model/auth.register.model")


const authRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
     console.log("BODY:", req.body);
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Username, email and password are required"
      });
    }
    
    const userexist = await UserModel.findOne({
      $or: [{ username }, { email }]
    });

    if (userexist) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashedpassword
    });

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username
      },
      process.env.JWT_SECERT,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true
    });

    return res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
};

const authLogin = async (req,res)=>{
  const {email,password} = req.body;
  if(!email || !password){
    return res.status(401).json({
      message:"input field"
    })
  }
  const user = await UserModel.findOne({email});
  if(!user){
    return res.status(401).json({
      message:"user not exist"
    })
  }
  const isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch){
    return res.status(401).json({
      message:"password is wrong"
    })
  }

  const token = jwt.sign({
    id:user._id,
    username:user.username
  },
  process.env.JWT_SECERT,
  {expiresIn:"1d"}
)
console.log(token)
res.cookie("token", token);

return res.status(201).json({
  message:"successful login"
})
}

const authLogout = async (req,res)=>{
   res.clearCookie("token");

   return res.status(200).json({
    message:"succesful logout"
   })
}
module.exports ={authRegister,authLogin,authLogout}