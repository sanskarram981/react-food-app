import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
                  name:"cart",
                  initialState:{
                    items:[]
                  },
                  reducers:{
                    addItem:(state,action)=>{
                       state.items.push(action.payload);
                    },
                    removeItem:(state,action)=>{
                       state.items.pop();
                    },
                    clearItem:(state,action)=>{
                       //state.items.length = 0;
                       return {items:[]};
                    }
                  }
});

export default cartSlice.reducer;
export const {addItem,clearItem,removeItem} = cartSlice.actions;