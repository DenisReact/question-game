import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen';

const App = () => (
    <Routes>
        <Route path="/" element={<StartScreen />} />
    </Routes>
);

export default App;
