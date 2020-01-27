import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/filmCard.scss'

function FilmCard(props) {
    const { id } = props.filmItem;
    const route = `/films/${id}`;
    return (
        <div className="card">
            <Link to={route}>
                <h2 className="card__title">Title: {props.filmItem.title}</h2>
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