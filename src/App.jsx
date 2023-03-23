import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react";
import ReactDOM from 'react-dom/client';

// State Import

// Component Imports
import Navbar from "./components/Navbar";
import MoviesDisplay from "./components/MoviesDisplay";

// Stylesheet Imports
import "./public-styles.css"
import "./styles/Navbar.css"
import "./styles/MoviesDisplay.css"


const App = () => {
    const childRef = useRef();

    // App Global States
    const [searchValue, setSearchValue] = useState('');

    // App Global Functions
    const updateSearch = (searchval) => {
        setSearchValue(searchval);
    }

    useEffect(() => {
        // console.log(searchValue);
        let sV = searchValue
        if (!searchValue) {
            sV = "batman"
        }
        childRef.current.updateMovies(sV)
      }, [searchValue])

    // JSX Markdown
    return (
        <>
        <Navbar updateSearch={updateSearch}/>
        <MoviesDisplay searchvalue={searchValue} ref={childRef}/>
        </>
    );
}

export default App;