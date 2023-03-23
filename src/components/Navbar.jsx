import React from "react";

const Navbar = ({ updateSearch }) => {
    // Navbar Update Functions
    // const handleInput = () => {
    //     // updateSearch("oooggggaaa")
    //     updateSearch();
    // }
    return (
        <>
        <header className="navbar">
        <h1>Movie-Fy</h1>
        <input placeholder="Search for movies..." onChange={e => updateSearch(e.target.value)}></input>
        <button>Login</button>
        </header>
        </>
    )
}

export default Navbar;