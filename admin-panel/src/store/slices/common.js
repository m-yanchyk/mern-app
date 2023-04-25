import { createSlice } from "@reduxjs/toolkit";

const defaultModal = {
  show: false,
};

const initialState = {
  title: "",
  modal: defaultModal,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTitleAction: (state, { payload }) => {
      state.title = payload;
    },
    openModalAction: (state, { payload }) => {
      state.modal = { ...payload, show: true };
    },
    closeModalAction: (state) => {
      state.modal = defaultModal;
    },
  },
});

export const { setTitleAction, openModalAction, closeModalAction } =
  commonSlice.actions;

export default commonSlice.reducer;
