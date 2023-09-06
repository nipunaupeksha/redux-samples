// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//separate slices independently -> counter.js,auth.js

const counterSlice = createSlice({
  name: "counter", //any name
  initialState: initialCounterState, // initialState: initialState or initialState
  reducers: {
    increment(state) {
      //can mutate state (this cannot be used with createStore)
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // increate(state, action) {
    //   state.counter = state.counter + action.amount;
    // },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// can use this as well
// const store = createStore(counterSlice.counterReducer);

// const store = configureStore({
//   reducer: counterSlice.reducer, //{counter: counterSlice.reducer, ...}
// });

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
