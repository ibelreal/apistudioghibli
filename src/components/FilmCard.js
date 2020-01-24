import React from 'react';
import PropTypes from "prop-types";

function FilmCard(props) {
    return (
        <div>
            <h2>Title: {props.filmItem.title}</h2>
        </div>
    )
}

FilmCard.propTypes = {
    filmsItem: PropTypes.shape({
        title: PropTypes.string
    })
};

export default FilmCard;