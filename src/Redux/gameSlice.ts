import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        currentLevel: 0,
    },
    reducers: {
        setLevelCount(state, action) {
            state.currentLevel = action.payload;
        },
        incrementLevelCount(state) {
            state.currentLevel += 1;
        },
    },
});

export default gameSlice.reducer;
export const { setLevelCount } = gameSlice.actions;
