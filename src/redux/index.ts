import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IFilm, IGenre } from "../types/movies";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface IAddInitialFilmsAction {
  payload: IFilm[];
  type: string;
}

interface IAddGenresAction {
  payload: IGenre[];
  type: string;
}

const initialMoviesState: IFilm[] = [];

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    addInitialFilms: (state, action: IAddInitialFilmsAction) => {
      return action.payload;
    },
  },
});

const initialGenresState: IGenre[] = [];
const genresSlice = createSlice({
  name: "genres",
  initialState: initialGenresState,
  reducers: {
    addGenres: (state, action: IAddGenresAction) => {
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    genres: genresSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { addInitialFilms } = moviesSlice.actions;
export const { addGenres } = genresSlice.actions;
