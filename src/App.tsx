import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Finish from './pages/Finish';
import Game from './pages/Game';
import NotFound from './pages/NotFound';
import Start from './pages/Start';

const App = () => (
    <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default App;
