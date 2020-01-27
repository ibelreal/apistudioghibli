import React from 'react';
import FilmCard from './FilmCard';
import PropTypes from 'prop-types';
import '../stylesheets/filmList.scss'

function FilmList(props) {
    return (
        <ul className="cards">
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