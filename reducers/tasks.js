import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (action.payload.urgent) {
                state.value.unshift(action.payload);
            } else {
                state.value.push(action.payload);
            }
            // console.log(urgent)
        },
        completeTask: (state, action) => {
            let index = state.value.findIndex(e => e.id === action.payload);
            state.value[index] = {...state.value[index], completed: !state.value[index].completed};
        },
        removeTask: (state, action) => {
            state.value.pop(action.payload);
        },
    }
})

export default taskSlice.reducer;
export const { addTask, completeTask, removeTask } = taskSlice.actions; 