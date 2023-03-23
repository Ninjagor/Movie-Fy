import React from "react";

const Movie = (props) => {
    let image = props.img;

    if (image == "N/A") {
        image = null;
    }

    return (
    <>
    <div className="movie">
        <img src={image ? props.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyEKIq_a7eWEwVEoo1aTBQ6gV1KQ4BI8ojEQgnl0ITQ&s"}></img>
        <h1>{props.title ? props.title : "un-named"}</h1>
        <div><p>{props.year ? props.year : "2000?"}</p> <p>{props.type ? props.type : "Movie"}</p></div>
    </div>
    </>
        );
    }

export default Movie;