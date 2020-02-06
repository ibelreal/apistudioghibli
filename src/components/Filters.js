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
    const handleSorted = event => {
        console.log('Qué pasa:' + props.isSorted)
        props.handleSorted();
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
                value={props.valueText}
                onChange={handleSearch}
            />
            <label>
                A to Z:
                <input
                    name="isSorted"
                    type="checkbox"
                    checked={props.isSorted}
                    onChange={handleSorted} />
            </label>
        </form>
    )
}

Filters.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Filters;