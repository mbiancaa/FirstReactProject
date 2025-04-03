import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";

export const TaskForm = () => {
    const dispatch = useDispatch();
    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        dispatch(addTask(form.elements.text.value));
        form.reset();
    }

    return (
        <form style={{ marginTop: 20, marginBottom: 20 }} onSubmit={handleAddTask}>
            <input type="text" name="text" placeholder="Enter task name..." />
            <button type="submit">Add task</button>
        </form>
    );
}