import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/filmDetail.scss'

const FilmDetail = (props) => {
    const { title, description, director, producer, release_date, rt_score } = props.films;
    return (
        <React.Fragment>
            <div className="card--detail container">
                <Link to='/'>
                    <button className="fas fa-backward card__detail--button"> BACK </button>
                </Link>
                <div className="card__detail">
                    <h3 className="card__detail--title">{title}</h3>
                    {/* <img className="card--detail__image" src={image} alt={title} /> */}
                    <p className="card__detail--description">{description}</p>
                    <ul>
                        <li className="card__detail--text">Director: {director}</li>
                        <li className="card__detail--text">Producer: {producer}</li>
                        <li className="card__detail--text">Year: {release_date}</li>
                        <li className="card__detail--text">Score: {rt_score}</li>
                    </ul>
                </div >
            </div>
        </React.Fragment>
    )
}

FilmDetail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    release_date: PropTypes.string,
    rt_score: PropTypes.string,
};

export default FilmDetail;