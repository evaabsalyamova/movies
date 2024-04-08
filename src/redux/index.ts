import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IFilm } from "../types/movies";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface IAddInitialFilmsAction {
  payload: IFilm[];
  type: string;
}

const initialState: IFilm[] = [];

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addInitialFilms: (state, action: IAddInitialFilmsAction) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { addInitialFilms } = moviesSlice.actions;
