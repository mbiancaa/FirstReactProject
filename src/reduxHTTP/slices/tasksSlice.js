import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "../operations";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false, // flag de incarcare
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(task => task.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(toggleCompleted.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(toggleCompleted.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(task => task.id === action.payload.id);
                state.items.splice(index, 1, action.payload);
            })
            .addCase(toggleCompleted.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
    // reducers: {
    //     fetchingInProgress(state) {
    //         state.isLoading = true;
    //     },
    //     fetchingSuccess(state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload;
    //     },
    //     fetchingError(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     }
    // },
});
export const tasksReducer = tasksSlice.reducer;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } = tasksSlice.actions;
