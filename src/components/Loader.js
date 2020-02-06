import React from 'react';
// import '../stylesheets/header.scss'
import { CircleLoading } from '../../node_modules/react-loadingg'

const Loader = ({ speed = -20 }) => {
    return (
        <CircleLoading speed={speed} />

    );
}

export default Loader;