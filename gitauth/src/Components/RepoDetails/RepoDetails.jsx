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
        <div className='container-fluid'>
            <div className='mt-1 mb-1' >
                <button className='btn btn-success '>
                    <Link className="navbar-brand text-white" to="/repos">Back to Repos</Link>

                </button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : selectedRepo ? (

                <div className="card " style={{ width: 300 }}>
                    <img src={selectedRepo?.owner?.avatar_url} className="card-img-top" alt="Card" height={250} />
                    <div className="card-body">
                        <h3 className="card-title text-uppercase">{selectedRepo.name}</h3>
                        <p className="card-text"><b>Author: </b>{selectedRepo.owner.login}</p>
                        <p className="card-text"><b>Language: </b>  {Object.values(selectedRepo.language)}</p>
                        <p className="card-text"><b>stargazers_count : </b>{selectedRepo.stargazers_count}</p>
                        <p className="card-text"><b>Forks :</b> {selectedRepo.forks_count}</p>
                        <a href={selectedRepo?.owner?.html_url} className="btn btn-primary navbar-brand">View Repository</a>
                    </div>
                </div>


            ) : (
                <p>Repository not found.</p>
            )}
        </div>
    );
};

export default RepoDetailsPage;
