import { configureStore, createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: "login",
    initialState: { loggedIn: false},
    reducers: {
        login(state) {
            state.loggedIn = true;
        }, 
        logout(state) {
            state.loggedIn = false
        }
    }
})

export const loginActions = loginSlice.actions

export const store = configureStore({
    reducer: loginSlice.reducer
})