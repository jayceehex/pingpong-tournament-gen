import React from 'react';

const PlayerList = ({ players, tournament }) => {
    return (
        <div className="textbox offwhite-bg">
            { Object.values(players).length ? (
                Object.values(players).map((player, i) => {
                return (
                    <p key={i}>
                        { player.name }
                    </p>
                )
            })) : (
                <p className="muted-text">No players yet. :(</p>
            ) }
        </div>
    )
}

export default PlayerList;