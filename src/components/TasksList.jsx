import { useState } from "react";
const TasksList = () => {

    const [tasks, setTasks] = useState([
        { id: 1, text: 'Buy milk', completed: false },
        { id: 2, text: 'Exercise', completed: true },
        { id: 3, text: 'Learn React', completed: true }
    ]);

    const [newTask, setNewTask] = useState("");
    const [showCompleted, setShowCompleted] = useState(true);

    const filteredTasks = showCompleted ? tasks : tasks.filter((task) => !task.completed);

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

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) => task.id === taskId ? {
                ...task, completed: !task.completed
            } : task)
        );
    }


    return (
        <div>
            <div>
                <input type="text" value={newTask} onChange={(event) => {
                    setNewTask(event.target.value);
                }} />
                <button onClick={addTask}>Add task</button>
                <button onClick={() => setShowCompleted(!showCompleted)} >
                    {showCompleted ? "Hide completed" : "Show all"}
                </button>
            </div>
            <h1>Tasks list</h1>
            {/* <ul>
                {
                    tasks.map((task) =>
                    (<li key={task.id}>
                        {task.text} {task.completed ? '✅' : '❌'}
                        <button onClick={() => deleteTask(task.id)}>Delete task</button>
                        <button onClick={() => toggleTaskCompletion(task.id)}>Update task status</button>
                    </li>)
                    )
                }
            </ul> */}

            <ul>
                {
                    filteredTasks.map((task) => (
                        <li key={task.id}>{task.text} {task.completed ? '✅' : '❌'}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TasksList;