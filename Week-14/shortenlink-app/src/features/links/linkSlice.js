import { createSlice} from "@reduxjs/toolkit";

const initialState={
   listBox:[],
   text:'',
}

const linkSlice = createSlice({
     
    name:"links",
    initialState,
    reducers:{
        setListBox:(state,{payload})=>{
           state.listBox.push(payload);
           state.text='';
        },
        setTextInBox:(state,{payload})=>{
          state.text=payload;
        }
    }
})
export const {setListBox,setTextInBox} = linkSlice.actions;

export default linkSlice.reducer

