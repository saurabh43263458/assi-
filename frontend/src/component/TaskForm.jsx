import { useState, useEffect } from "react";
import axios from "axios";
import "./component.css";

function TaskForm({ settask, editTask, setEditTask }) {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editTask) {
      setData({
        title: editTask.title,
        description: editTask.description
      });
    }
  }, [editTask]);

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editTask) {
        const res = await axios.put(
          `http://localhost:3000/task/updatetask?id=${editTask._id}`,
          data,
           {
           withCredentials: true,
           }
        );

        settask((prev) =>
          prev.map((task) =>
            task._id === editTask._id
              ? res.data.task
              : task
          )
        );

        setEditTask(null);
      } else {
        const res = await axios.post(
          "http://localhost:3000/task/create",
          data,
           {
            withCredentials: true,
           }
        );

        settask(res.data.tasks);
      }

      setData({
        title: "",
        description: "",
       
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={data.title}
          onChange={handlechange}
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={data.description}
          onChange={handlechange}
        />

        
        <button type="submit">
          {editTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;