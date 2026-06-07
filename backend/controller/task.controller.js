const taskModel = require("../model/task.model");


const addtask = async(req,res)=>{
    try{
      const {title,description} = req.body;
      const userId = req.user.id;
    if(!title || !description ){
        return res.status(400).json({
            message:"somethinf is missioning"
        })
    }
    const task = await taskModel.create({
          title,
      description,
      userId: req.user.id,
    })
    const tasks = await taskModel.find({userId});
    return res.status(201).json({
      message: "Task created successfully",
      tasks,
    });
    }
    catch(error){
      return res.status(500).json({
      message: error.message,
    });
    }
}
const edittask = async(req,res)=>{
   try{
      const id = req.query.id;
      const {title,description} = req.body;
      const userId = req.user.id;
      const existtask = await taskModel.findOne({
         _id: id,
      userId: req.user.id,
      })
      if(!existtask){
        return res.status(201).json({
            message:"edittask not possible as task doesnot exist"
        })
      }
     const updatedTask = await taskModel.findByIdAndUpdate(
  id,
  { title, description },
  { new: true }
);

return res.status(200).json({
  message: "Task updated successfully",
  task: updatedTask,
});
    }
    catch(error){
      return res.status(500).json({
      message: error.message,
    });
}}
const getAllTasks = async(req,res)=>{
    try{
        const userId = req.user.id;
        const task = await taskModel.find({userId});
        return res.status(200).json({
    tasks: task
})
    }
    catch(error){
        return res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}



const deletetask = async (req,res) =>{
   try{
const id  = req.query.id;
   const userId = req.user.id;
   
   const taskDelete = await  taskModel.findOne({_id:id,userId:userId});

   if(!taskDelete){
    return res.status(201).json({
        message:"task doesn't exist"
    });
   }
  await taskModel.deleteOne({
  _id: id,
  userId
});
    return res.status(200).json({
      message: "Task deleted successfully",
    });
   }
   catch(error){
     return res.status(500).json({
      message: error.message,
   });
}
}

module.exports = {addtask,edittask,deletetask,getAllTasks}