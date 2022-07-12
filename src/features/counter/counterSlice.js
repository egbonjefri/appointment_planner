import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  items: [],
  other: [],
  appointments: [],
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    objectAdder: (state, action) => {
        const found = state.items.find(element => element.name === action.payload.name);
        if (found === undefined) {
          state.items.push(action.payload);
        }
        else {
          alert('Contact Already Exists!');
          state.other.push(action.payload)
        }
    },
    apptAdder: (state, action) => {
      state.appointments.push(action.payload)
    },
 
  },

});

export const { objectAdder, apptAdder } = counterSlice.actions;


;

export default counterSlice.reducer;

