import { useState } from "react";
const TasksList = () => {

    const [tasks, setTasks] = useState([
        { id: 1, text: 'Buy milk', completed: false },
        { id: 2, text: 'Exercise', completed: true },
        { id: 3, text: 'Learn React', completed: true }
    ]);

    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        const task = {
            id: Date.now(),
            text: newTask,
            completed: false
        };
        setTasks([...tasks, task]);
        setNewTask("");
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }



    return (
        <div>
            <div>
                <input type="text" value={newTask} onChange={(event) => {
                    setNewTask(event.target.value);
                }} />
                <button onClick={addTask}>Add task</button>
            </div>
            <h1>Tasks list</h1>
            <ul>
                {
                    tasks.map((task) =>
                    (<li key={task.id}>
                        {task.text} {task.completed ? 'checkmark' : 'X'}
                        <button onClick={() => deleteTask(task.id)}>Delete task</button>
                    </li>)
                    )
                }
            </ul>

        </div>
    );
}

export default TasksList;