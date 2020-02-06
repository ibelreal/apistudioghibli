import React from 'react';
import FilmCard from './FilmCard';
import PropTypes from 'prop-types';
import '../stylesheets/filmList.scss'

function FilmList(props) {
    return (
        <ul className="cards">
            {(props.isSorted === true)
                ? props.filterFilms.sort((a, b) => a.title.localeCompare(b.title)).map(filmItem => (
                    <li key={filmItem.id} className="list__item">
                        <FilmCard filmItem={filmItem} />
                    </li>
                ))
                : props.filterFilms.map(filmItem => (
                    <li key={filmItem.id} className="list__item">
                        <FilmCard filmItem={filmItem} />
                    </li>
                ))}
        </ul>
    )
}

FilmList.propTypes = {
    filterFilms: PropTypes.array.isRequired,
    isSorted: PropTypes.bool
};

export default FilmList;