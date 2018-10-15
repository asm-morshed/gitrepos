import React from 'react'
import Repo from './Repo';
const GithubRepos = ({ repos }) => {
    console.log("repos", typeof (repos));

    const repoList = (
        <div>
            {repos.map(repo => <Repo repo={repo} key={repo.id} />
            )}
        </div>
    )
    return (
        <div>
            {repos.length !== 0 ? repoList : null}
        </div>
    )
}

export default GithubRepos;
