import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLight: true,
  },
  reducers: {
    setValue: (initialState, action) => {
      initialState.isLight = !initialState.isLight;
    },
  },
});

export const { setValue } = themeSlice.actions;
export default themeSlice.reducer;
