import React from 'react';
import PropTypes from "prop-types";

function FilmCard(props) {
    console.log(props)
    return (
        <div>
            <h2>Title: {props.filmItem.title}</h2>
        </div>
    )
}

FilmCard.propTypes = {
    films: PropTypes.object
};

export default FilmCard;