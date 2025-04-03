import { statusFilters } from "../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../redux/slices/filtersSlice";
import { Button } from './Button';

export const StatusFilter = () => {
    const filter = useSelector(state => state.filters.status);
    const dispatch = useDispatch();
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
            <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
            <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>Completed</Button>
        </div>

    );
}