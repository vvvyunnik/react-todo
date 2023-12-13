import { createSlice } from "@reduxjs/toolkit";
import { FilterType } from "../constants/filters";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: FilterType.None,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
