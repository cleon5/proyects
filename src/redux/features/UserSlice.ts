import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface user2{
    Alias:String,
}

interface stateType {
    User: user2|null;
  };
  

const initialState:stateType = {
    User:{Alias:"asd"}
}

export const UserSlice = createSlice({
    name:"UserState",
    initialState:initialState,
    reducers:{
        saveUserState:(state, action: PayloadAction<user2>)=>{
            console.log(state, action.payload);
            state.User = (action.payload)
        }
    }
})

export const {
    saveUserState
} = UserSlice.actions;

//export const selectAuthState = (state:any) => state.UserSlice;
export default UserSlice.reducer;
