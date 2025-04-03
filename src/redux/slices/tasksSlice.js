import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const tasksInitialState = [
    { id: 1, text: "Learn HTML&CSS", completed: true },
    { id: 2, text: "Learn JavaScript", completed: true },
    { id: 3, text: "Learn React", completed: false },
    { id: 4, text: "Learn Redux", completed: false },
    { id: 5, text: "Develop the best app", completed: false }
];

const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },

            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                        completed: false
                    }
                }
            }
        },
        deleteTask(state, action) {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        toggleCompleted(state, action) {
            for (const task of state) {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                    break;
                }
            }
        }
    }
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;