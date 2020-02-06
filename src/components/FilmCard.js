import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/filmCard.scss';

function FilmCard(props) {
    const { id } = props.filmItem;
    const route = `/films/${id}`;

    return (
        <div className="card">
            <Link to={route}>
                <h2 className="card__title">{props.filmItem.title}</h2>
                <div className="card__container" >
                    <img className="card__container--movie" src={props.filmItem.urlCover} alt="movie cover" />
                </div>
            </Link>
        </div>
    )
}

FilmCard.propTypes = {
    filmsItem: PropTypes.shape({
        title: PropTypes.string
    })
};

export default FilmCard;