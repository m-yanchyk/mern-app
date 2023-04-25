import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTitleAction: (state, { payload }) => {
      state.title = payload;
    },
  },
});

export const { setTitleAction } = commonSlice.actions;

export default commonSlice.reducer;
