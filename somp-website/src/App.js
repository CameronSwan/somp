import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className='container'>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/Projects' element={<Projects />} />
                </Routes>
                <Contact />
                <Footer />
            </Router>
        </div>
    )
}