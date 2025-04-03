import { TaskList } from "../componentsForReduxApp/TaskList";
import { TaskCounter } from "../componentsForReduxApp/TaskCounter";
import { TaskForm } from "../componentsForReduxApp/TaskForm";
const Homepage = () => {
    return (
        <>
            <h1>Task Scheduler</h1>
            <TaskForm />
            <TaskCounter />
            <TaskList />
        </>
    );
}

export default Homepage;