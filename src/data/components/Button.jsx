import React, { Component, Fragment } from 'react';

const Button = ({id, type, isDisabled, onClick, children}) => {
    let classType = type === 'highlight' ? "highlight-button" : "standard-button";
    return (
        <button id={id} onClick={onClick} disabled={isDisabled} className={classType}>{children}</button>
    )
}

export default Button;