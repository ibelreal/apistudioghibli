import React from 'react';
import FilmCard from './FilmCard';
import PropTypes from "prop-types";

function FilmList(props) {
    return (
        <ul>
            {props.films.map(filmItem => (
                <li key={filmItem.id} className="list__item">
                    <FilmCard filmItem={filmItem} />
                </li>
            ))}

        </ul>
    )
}

FilmList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmList;