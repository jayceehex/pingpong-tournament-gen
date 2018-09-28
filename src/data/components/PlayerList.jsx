import React from 'react';

const PlayerList = ({ players, tournament }) => {
    return (
        <div className="bracketbox light-text">
        <h2>Players</h2>
            { Object.values(players).length ? (
                Object.values(players).map((player, i) => {
                return (
                    <div key={i} className="player">
                        { player.name }
                    </div>
                )
            })) : (
                <p>No players yet. :(</p>
            ) }
        </div>
    )
}

export default PlayerList;