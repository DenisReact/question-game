import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        currentLevel: 0,
        currentBudget: '0',
    },
    reducers: {
        setLevelCount(state, action) {
            state.currentLevel = action.payload;
        },
        setBudget(state, action) {
            state.currentBudget = action.payload;
        },
        incrementLevel(state) {
            state.currentLevel += 1;
        },
    },
});

export default gameSlice.reducer;
export const { setLevelCount, setBudget, incrementLevel } = gameSlice.actions;
