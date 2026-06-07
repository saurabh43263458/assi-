const jwt = require("jsonwebtoken")

const taskMiddleware = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);

    const token = req.cookies.token;

    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    const decode = jwt.verify(
      token,
      process.env.JWT_SECERT
    );

    req.user = decode;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};


module.exports = taskMiddleware