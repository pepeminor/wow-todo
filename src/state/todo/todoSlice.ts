import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITwitterOAuth {
  accessToken?: string;
  refreshToken?: string;
  twitterId?: string;
  picture?: string;
}

interface IOtherState {
  isLoading: boolean;
}

export interface IInitialState extends ITwitterOAuth, IOtherState {}

const initialState = [] as ITodo[];

export interface ITodo {
  id: string;
  title: string;
  desc: string;
  isDone: boolean;
}

const totoSlice = createSlice({
  name: "totoSlice",
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      const newTodo = state.map((i) => {
        if (i.id === action.payload.id) {
          i = action.payload;
        }
        return i;
      });
      state = newTodo;
    },
  },
});

export const todoActions = totoSlice.actions;
export const todoReducer = totoSlice.reducer;
