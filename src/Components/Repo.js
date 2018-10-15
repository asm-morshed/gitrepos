import React from 'react'

export default function Repo({ repo }) {
    console.log("Just repo: ---", repo);

    return (

        <div className="ui card">
            <div className="card">
                <div className="content">
                    <div className="header">{repo.name}</div>

                </div>
            </div>
        </div>

    )
}
