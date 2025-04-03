import { TaskList } from "../componentsForReduxApp/TaskList";
import { TaskCounter } from "../componentsForReduxApp/TaskCounter";
import { TaskForm } from "../componentsForReduxApp/TaskForm";
import { StatusFilter } from "../componentsForReduxApp/StatusFilter";
import '../App.css';

const Homepage = () => {
    return (
        <>
            <h1>Task Scheduler</h1>
            <StatusFilter />
            <TaskForm />
            <TaskCounter />
            <TaskList />
        </>
    );
}

export default Homepage;