import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoDetailsAsync } from '../../Features/reposSlice';


const RepoDetailsPage = () => {
    const { repoName, owner } = useParams();
    const dispatch = useDispatch();
    const selectedRepo = useSelector((state) => state.repos.selectedRepo);
    const loading = useSelector((state) => state.repos.loading);
    useEffect(() => {
        dispatch(fetchRepoDetailsAsync({ owner: owner, repo: repoName }));
    }, [dispatch, repoName, owner]);

    return (
        <div>
            <Link to="/repos">Back to Repos</Link>
            {loading ? (
                <p>Loading...</p>
            ) : selectedRepo ? (

                <div className="card " style={{ width: 200 }}>
                    <img src="https://placeimg.com/200/200/tech" className="card-img-top" alt="Card" width={120} height={80} />
                    <div className="card-body">
                        <h5 className="card-title">{selectedRepo.name}</h5>
                        <p className="card-text">Author: {selectedRepo.owner.login}</p>
                        <p className="card-text">Language:  {Object.values(selectedRepo.language)}</p>
                        <p className="card-text">{selectedRepo.stargazers_count}</p>
                        <p className="card-text">{selectedRepo.forks_count}</p>
                        <a href="#" className="btn btn-primary">View Repository</a>
                    </div>
                </div>


            ) : (
                <p>Repository not found.</p>
            )}
        </div>
    );
};

export default RepoDetailsPage;
