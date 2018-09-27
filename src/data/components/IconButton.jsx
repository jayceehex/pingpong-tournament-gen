import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let back = <FontAwesomeIcon icon="chevron-left" className="light-text" />
let forward = <FontAwesomeIcon icon="chevron-right" className="light-text" />

const IconButton = ({target, icon}) => {
    return (
        <Link to={target} className="round-button">{ icon }</Link>
    )
}

export default IconButton;