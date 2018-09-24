import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

const PlayerList = ({ players, tournament }) => {
    return (
        <Fragment>
            { Object.values(players).length ? (
                Object.values(players).map((player, i) => {
                return (
                    <p key={i}>
                        { player.name }
                    </p>
                )
            })) : (
                <p>No players yet. :(</p>
            ) }
        </Fragment>
    )
}

export default PlayerList;