import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameSlice from './gameSlice';

const rootReducer = combineReducers({
    game: gameSlice,
});

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
