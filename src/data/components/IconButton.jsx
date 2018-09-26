import React from 'react';
import { Link } from "react-router-dom";

const IconButton = ({target}) => {
    return (
        <Link to={target} className="button">Back</Link>
    )
}

export default IconButton;