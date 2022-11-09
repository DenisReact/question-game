import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';

const App = () => (
    <Routes>
        <Route path="/" element={<Start />} />
    </Routes>
);

export default App;
