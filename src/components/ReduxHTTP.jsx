import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../reduxHTTP/operations";
import { getTasks, getIsLoading, getError, getStatusFilter } from '../reduxHTTP/selectors';
import { StatusFilter } from "../componentsForReduxApp/StatusFilter";
import { TaskList } from "../componentsForReduxApp/TaskList";
import { TaskForm } from "../componentsForReduxApp/TaskForm";

const ReduxHTTP = () => {
    const dispatch = useDispatch();
    const items = useSelector(getTasks);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const filter = useSelector(getStatusFilter);

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch]);

    return (
        <div>
            <h1>Task Scheduler</h1>
            <TaskForm />
            {isLoading && !error ? (
                <p>Fetching tasks in progress...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : items.length > 0 ? (
                <>
                    <StatusFilter filter={filter} />
                    <TaskList tasks={items} />
                </>
            ) : (
                <p>No tasks for now. Please add some.</p>
            )}

        </div>
    );
}

export default ReduxHTTP;