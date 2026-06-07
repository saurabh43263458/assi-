import "./component.css"

function TaskCard({ tasks, onEdit, onDelete }) {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>
            <strong>Status:</strong> {task.status}
          </p>

          <div className="task-actions">
            <button onClick={() => onEdit(task)}>
              Edit
            </button>

            <button onClick={() => onDelete(task._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskCard;