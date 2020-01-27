import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filters.scss'

function Filters(props) {

    const handleSubmit = event => {
        event.preventDefault();
    };
    const handleSearch = event => {
        const searchFilm = event.target.value.trim().toLowerCase();
        props.handleSearch(searchFilm);
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="searchFilm">Search for a film: </label>
            <input
                className="form__searchBar"
                type="text"
                name="searchFilm"
                id="searchFilm"
                placeholder="My neighbor Totoro"
                value={props.value}
                onChange={handleSearch}
            />
        </form>
    )
}

Filters.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Filters;