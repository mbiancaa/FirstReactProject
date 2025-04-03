const initialState = {
    tasks: [
        { id: 1, text: "Learn HTML&CSS", completed: true },
        { id: 2, text: "Learn JavaScript", completed: true },
        { id: 3, text: "Learn React", completed: false },
        { id: 4, text: "Learn Redux", completed: false },
        { id: 5, text: "Develop the best app", completed: false }
    ],
    filters: {
        status: "all",
    }
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "tasks/addTask": {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }
        }
        case "tasks/toggleCompleted": {
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? {
                    ...task, completed: !task.completed
                } : task),
            };
        }
        case "tasks/deleteTask": {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        }
        default:
            return state;
    }
}