import { createSlice } from "@reduxjs/toolkit";
import { makeEmptyArrs } from "../shared/utils";
 

interface publicState {
    tabs: null[] ;
    numberOfprevDays:number;
}
 
const initialState: publicState = {
  tabs: makeEmptyArrs(10),
  numberOfprevDays:5
};


export const matchesSlice = createSlice({
  name: "matchesSlice", 
  initialState,
  reducers: {
    addPrevTabs(state ) {
        state.numberOfprevDays+=5
        state.tabs = state.tabs.concat(makeEmptyArrs(5))
    },

    addPrecedingTabs(state ) {

        state.tabs = state.tabs.concat(makeEmptyArrs(5))
       
    },
  },
});

export const { addPrevTabs,addPrecedingTabs } = matchesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.public.value;

export default matchesSlice.reducer;
