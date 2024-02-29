import { createSlice } from "@reduxjs/toolkit";
import { IFilm } from "../types/movies";

interface IAddInitialFilmsAction {
    payload: IFilm[]
    type: string
}

const initialState: IFilm[] = [];

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addInitialFilms: (state, action: IAddInitialFilmsAction) => {
            return action.payload
        }
    }
})


export const { addInitialFilms } = moviesSlice.actions
export default moviesSlice.reducer