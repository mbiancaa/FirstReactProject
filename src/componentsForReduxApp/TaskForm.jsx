import { useDispatch } from "react-redux";
import { useState } from "react";
// import { addTask } from "../redux/slices/tasksSlice";
import { addTask } from "../reduxHTTP/operations";

export const TaskForm = () => {
    const dispatch = useDispatch();
    const [errorInput, setErrorInput] = useState("");

    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        if (form.elements.text.value !== '') {
            setErrorInput("");
            dispatch(addTask(form.elements.text.value));
            form.reset();
        } else {
            setErrorInput("errorInput");
        }
    }

    return (
        <form style={{ marginTop: 20, marginBottom: 20 }} onSubmit={handleAddTask}>
            <input type="text" className={errorInput} name="text" placeholder="Enter task name..." />
            <button type="submit">Add task</button>
        </form>
    );
}