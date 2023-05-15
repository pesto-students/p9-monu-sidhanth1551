import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: true,
  lightedness:"lit"
};
const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers:{
     
      turnSwitch:(state)=>{
        state.isOn=!state.isOn;
      },

      changeLightWord:(state)=> {
       state.lightedness=state.lightedness==="lit"?"dark":"lit"
      },
  }
});

export const {turnSwitch,changeLightWord} = buttonSlice.actions

export default buttonSlice.reducer;