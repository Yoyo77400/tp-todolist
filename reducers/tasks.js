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
            console.log(action.payload, state.value)
                if (action.payload) {
                    
                }else{
                    
                }
            ;
        },
        removeTask: (state, action) => {
            state.value.pop(action.payload);
        },
    }
})

export default taskSlice.reducer;
export const { addTask, completeTask, removeTask } = taskSlice.actions; 