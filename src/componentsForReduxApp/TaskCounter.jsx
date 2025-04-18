import { useSelector } from "react-redux";

export const TaskCounter = () => {
    const tasks = useSelector(state => state.tasks);

    const count = tasks.reduce(
        (acc, task) => {
            if (task.completed) {
                acc.completed += 1;
            } else {
                acc.active += 1;
            }

            return acc;
        },
        {
            active: 0, completed: 0
        }
    );

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
            <p>In Progress: {count.active}</p>
            <p>Completed: {count.completed}</p>
        </div>
    );
}