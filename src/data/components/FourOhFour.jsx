import React from 'react';
import { Link } from "react-router-dom";

const FourOhFour = () => {
    return (
        <main>
            <h2>Oops!</h2>
            <p>The page you're trying to get to doesn't exist.</p>
            <div className="button-container">
                <Link to="/" className="highlight-button">Home</Link>
            </div>
        </main>
    )
}

export default FourOhFour;