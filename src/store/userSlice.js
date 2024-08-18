import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const initialState =  {
    id : '',
    email : '',
    photoURL : '',
    displayName : ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state,action) =>{
=======
const initialState = {
    id:'',
    email:'',
    photoURL:'',
    displayName:''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action) => {
>>>>>>> refs/remotes/origin/main
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.displayName = action.payload.displayName;
        },
<<<<<<< HEAD
        removeUser : (state) => {
=======
        removeUser: (state) => {
>>>>>>> refs/remotes/origin/main
            state.id = '';
            state.email = '';
            state.photoURL = '';
            state.displayName = '';
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
export default userSlice.reducer;