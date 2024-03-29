import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  username: '',
  points: 0,
  level: 1,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, username } = action.payload;
      state.name = name;
      state.username = username;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addUser, changeName } = userSlice.actions;
export default userSlice.reducer;
