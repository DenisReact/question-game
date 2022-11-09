import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Start from './pages/Start';

const App = () => (
    <Routes>
        <Route path="/" element={<Start />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default App;
