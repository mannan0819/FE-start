import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

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
    increment: (state) => {
      state.isAdmin = true;
    },
    decrement: (state) => {
      state.isLoggedIn = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserId = (state: RootState) => state.users.userId;
export const selectUserName = (state: RootState) => state.users.userName;
export const selectIsLoggedIn = (state: RootState) => state.users.isLoggedIn;
export const selectIsAdmin = (state: RootState) => state.users.isAdmin;

export default userSlice.reducer