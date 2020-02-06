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
    const handleSorted = () => {
        props.handleSorted();
    };
    const handleSelectDirector = ev => {
        props.handleSelectDirector({
            selectDirector: ev.target.value
        });
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
            <div className='filter__specie'>
                <label className='filter__label'>Director: </label>
                <select
                    className='filter__input'
                    onChange={handleSelectDirector}
                    value={props.selectDirector}>
                    <option value=""> All </option>
                    <option value="Gorō Miyazaki" >Gorō Miyazaki</option>
                    <option value="Hayao Miyazaki" >Hayao Miyazaki</option>
                    <option value="Hiromasa Yonebayashi" >Hiromasa Yonebayashi</option>
                    <option value="Hiroyuki Morita" >Hiroyuki Morita</option>
                    <option value="Isao Takahata" >Isao Takahata</option>
                    <option value="Yoshifumi Kondō" >Yoshifumi Kondō</option>
                </select>
            </div>

        </form>
    )
}

Filters.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Filters;