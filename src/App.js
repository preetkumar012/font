import React from 'react'
import Login from './Login'
import Signup from "./Signup"
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                   
                    <Route path="/dash" element={<Dashboard/>} />

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App