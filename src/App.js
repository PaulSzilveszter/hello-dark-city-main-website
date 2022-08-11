/*
    Functionality: Builds the whole app, manages routing and the whole app state 
*/
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import LandingPage from "./components/LandingPage.js"


import { ghostCursor } from 'cursor-effects';

new ghostCursor();

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter  basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" exact element={<LandingPage />} />
                    
                </Routes>
            </BrowserRouter>
        )
    }

}