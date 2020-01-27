import React from 'react';
import FilmCard from './FilmCard';
import PropTypes from "prop-types";

function FilmList(props) {
    console.log(props)
    return (
        <ul>
            {props.filterBySearch.map(filmItem => (
                <li key={filmItem.id} className="list__item">
                    <FilmCard filmItem={filmItem} />
                </li>
            ))}
        </ul>
    )
}

FilmList.propTypes = {
    filterBySearch: PropTypes.array.isRequired
};

export default FilmList;