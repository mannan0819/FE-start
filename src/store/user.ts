import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { UserResponse } from "../types/UserResponse";
import authService from '../service/authService'

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userInfo: { username: string, password: string }, _thunkAPI) => {
    const user = await authService.login(userInfo.username, userInfo.password)
    return user;
  }
)

// Define a type for the slice state
interface UserState {
  userId?: number,
  userName?: string,
  isLoggedIn: boolean,
  isAdmin: boolean,
}

// Define the initial state using that type
const initialState: UserState = {
  isLoggedIn: false,
  isAdmin: false,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ UserResponse: UserResponse }>) {
      state.userId = action.payload.UserResponse.id;
      state.userName = action.payload.UserResponse.name;
      state.isAdmin = action.payload.UserResponse.isAdmin;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.isAdmin = (action.payload.isAdmin);
        state.isLoggedIn = true;
        state.userId = action.payload.id;
        state.userName = action.payload.name;
      }
    })
  },
})

export const { login } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserId = (state: RootState) => state.users.userId;
export const selectUserName = (state: RootState) => state.users.userName;
export const selectIsLoggedIn = (state: RootState) => state.users.isLoggedIn;
export const selectIsAdmin = (state: RootState) => state.users.isAdmin;

export default userSlice.reducer