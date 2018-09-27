import React from 'react';

const PlayerList = ({ players, tournament }) => {
    return (
        <div className="bracketbox light-text">
            { Object.values(players).length ? (
                Object.values(players).map((player, i) => {
                return (
                    <div key={i} className="playerbox lightblue-bg dark-text">
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