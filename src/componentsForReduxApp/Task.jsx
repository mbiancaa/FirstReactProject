import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../redux/slices/tasksSlice";

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const handleToggle = () => {
        dispatch(toggleCompleted(task.id))
    }


    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
            <input type="checkbox" onChange={handleToggle} checked={task.completed} />
            <p>{task.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );

}

export default Task;