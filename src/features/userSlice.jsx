import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // payload is the user
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user; // state.user.user is the user

export default userSlice.reducer;
