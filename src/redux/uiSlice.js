import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    error: false,
    loading: false,

}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) =>{
            state.error = action.payload
        }
    }
})

export const { setLoading, setError } = uiSlice.actions
export default uiSlice.reducer 