import axios from "axios";
// import {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError
// } from "./slices/tasksSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/tasks');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const addTask = createAsyncThunk("tasks/addTask", async (text, thunkAPI) => {
    try {
        const response = await axios.post('/tasks', { text });
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId, thunkAPI) => {
    try {
        const response = await axios.delete(`/tasks/${taskId}`);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const toggleCompleted = createAsyncThunk("tasks/toggleCompleted", async (task, thunkAPI) => {
    try {
        const response = await axios.put(`/tasks/${task.id}`, {
            completed: !task.completed
        });
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

// export const fetchTasks = () => async dispatch => {
//     try {

//         dispatch(fetchingInProgress());
//         const response = await axios.get("/tasks");

//         dispatch(fetchingSuccess(response.data))
//     } catch (err) {
//         dispatch(fetchingError(err.message));
//     }
// }