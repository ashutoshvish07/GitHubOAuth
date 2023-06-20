import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoDetailsAsync } from '../../Features/reposSlice';


const RepoDetailsPage = () => {
    const { repoName } = useParams();
    const dispatch = useDispatch();
    const selectedRepo = useSelector((state) => state.repos.selectedRepo);
    const loading = useSelector((state) => state.repos.loading);
    debugger;
    useEffect(() => {
        dispatch(fetchRepoDetailsAsync({ owner: 'github', repo: repoName }));
    }, [dispatch, repoName]);

    return (
        <div>
            <Link to="/repos">Back to Repos</Link>
            {loading ? (
                <p>Loading...</p>
            ) : selectedRepo ? (
                <div>
                    <h1>{selectedRepo.name}</h1>
                    <p>Author: {selectedRepo.owner.login}</p>
                    <p>Languages: {Object.values(selectedRepo.language)}</p>
                    <p>Stars: {selectedRepo.stargazers_count}</p>
                    <p>Forks: {selectedRepo.forks_count}</p>
                </div>
            ) : (
                <p>Repository not found.</p>
            )}
        </div>
    );
};

export default RepoDetailsPage;
