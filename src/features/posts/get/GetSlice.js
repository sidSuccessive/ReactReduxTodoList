import { createSlice } from '@reduxjs/toolkit';

const someData = { text: "Hi my Redux"};

const GetSlice = createSlice({
    name: 'get',
    initialState: someData,
    reducers:{
        getData:(state,action) => {
            return {
                ...state,
                text: action.payload,
            };
        }
    }
})

export const { getData } = GetSlice.actions;
export default GetSlice.reducer;

