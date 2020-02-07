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
            <div className='filter filter__film'>
                <label htmlFor="searchFilm" className="filter__film label">Search for a film: </label>
                <input
                    className="filter__film input"
                    type="text"
                    name="searchFilm"
                    id="searchFilm"
                    placeholder="My neighbor Totoro"
                    value={props.valueText}
                    onChange={handleSearch}
                />
            </div>
            <div className='filter filter__sort'>
                <label htmlFor="isSorted" className='filter__sort label'>A to Z: </label>
                <input
                    className='filter__sort checkbox'
                    name="isSorted"
                    type="checkbox"
                    checked={props.isSorted}
                    onChange={handleSorted} />
            </div>
            <div className='filter filter__director'>
                <label className='filter__director label'>Director: </label>
                <select
                    className='filter__director select'
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