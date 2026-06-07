import { useState,useEffect } from "react";
import Navbar from "../component/Navbar";
import TaskForm from "../component/TaskForm";
import TaskCard from "../component/TaskCard";
import "./dashboard.css";
import axios from "axios";

function Dashboard() {
   console.log("Dashboard Rendered");
  const [task, settask] = useState([]);
  const [editTask, setEditTask] = useState(null);

  

const fetchTasks = async () => {
  console.log("fetchTasks called");
  try {
    const res = await axios.get(
      "http://localhost:3000/task/getalltask",{
          withCredentials: true,
        }
    );

    console.log("Response:", res.data);

    settask(res.data.tasks);
  } catch (error) {
    console.error(error.message);
  }
};
useEffect(() => {
  console.log("Dashboard mounted");
  fetchTasks();
}, []);
  const onEdit = (task) => {
    setEditTask(task);
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/task/deletetask?id=${id}`,
        {
          withCredentials: true,
        }
      );

      settask((prev) =>
        prev.filter((task) => task._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-container">
        <h1>Task Dashboard</h1>

        <TaskForm
          settask={settask}
          editTask={editTask}
          setEditTask={setEditTask}
        />

        <div className="task-list">
          <TaskCard
            tasks={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;