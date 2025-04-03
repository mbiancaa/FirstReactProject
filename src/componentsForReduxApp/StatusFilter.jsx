import { statusFilters } from "../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../redux/actions";

export const StatusFilter = () => {
    const filter = useSelector(state => state.filters.status);
    const dispatch = useDispatch();
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <button selected={filter === statusFilters.all} onClick={()=>handleFilterChange(statusFilters.all)}>All</button>
        <button selected={filter === statusFilters.active} onClick={()=>handleFilterChange(statusFilters.active)}>Active</button>
        <button selected={filter === statusFilters.completed} onClick={()=>handleFilterChange(statusFilters.completed)}>Completed</button>
    );
}