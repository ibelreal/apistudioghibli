import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/filmDetail.scss'

const FilmDetail = (props) => {
    const { title, description, director, producer, release_date, rt_score, urlCover } = props.films;
    return (
        <React.Fragment>
            <div className="card--detail container">
                <div className="card__detail">
                    <Link to='/'>
                        <button className=" card__detail--button">  BACK </button>
                    </Link>
                    <h3 className="card__detail--title">{title}</h3>
                    <li className="card__detail--text title">Directed by <span className="strong">{director}</span></li>
                    <div>
                        <img className="card__detail--image" src={urlCover} alt={title} />
                    </div>
                    <p className="card__detail--description">{description}</p>
                    <ul>
                        <li className="card__detail--text">Producer: <span className="strong">{producer}</span></li>
                        <li className="card__detail--text">Year of production: <span className="strong">{release_date}</span></li>
                        <li className="card__detail--text">Score: <span className="strong">{rt_score}</span></li>
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