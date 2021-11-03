// Code SimplerComponent Here
import React from 'react';
// import { ProgressPlugin } from 'webpack';

const SimplerComponent = ({ handleClick }) => {
    // debugger

    return (
        <div onClick={handleClick}>I am just happy</div>
    )
}

export default SimplerComponent;