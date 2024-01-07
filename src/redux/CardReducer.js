import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCard: (state, action) => {
     
      state.products.push(action.payload)

        }, 
    removeFromCard: (state)=>{
      state.products=[]
    }


      
  },
});
export const { addToCard,removeFromCard } = cardSlice.actions;
export default cardSlice.reducer;