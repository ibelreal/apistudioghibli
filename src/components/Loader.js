import React from 'react';
// import '../stylesheets/header.scss'
import { CircleLoading } from 'react-loadingg'

const Loader = ({ speed = -20 }) => {
    return (
        <CircleLoading speed={speed} />

    );
}

export default Loader;