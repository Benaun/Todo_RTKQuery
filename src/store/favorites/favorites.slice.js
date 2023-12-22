import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFav: (state, action) => {
            const recipe = action.payload.recipe;
            const isRecipe = state.some(item => item.id === recipe.id)
            if (isRecipe)
                state = state.filter(item => item.id !== recipe.id)
            else
                state.push()
        }
    }
})

export const {toggleFav} = favoritesSlice.actions;
export default favoritesSlice.reducer