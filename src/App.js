import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkincareForm from './components/SkincareForm';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <h1>Skincare Routine Recommendation</h1>
                            <SkincareForm />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;