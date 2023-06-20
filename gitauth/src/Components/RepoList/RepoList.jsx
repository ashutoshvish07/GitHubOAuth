import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingReposAsync } from '../../Features/reposSlice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const ReposPage = () => {
    const dispatch = useDispatch();
    const trendingRepos = useSelector((state) => state.repos.trendingRepos);
    const loading = useSelector((state) => state.repos.loading);

    useEffect(() => {
        dispatch(fetchTrendingReposAsync());
    }, [dispatch]);

    return (
        <div>
            <h1>Trending Repositories</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {trendingRepos.map((repo) => (
                        <li>
                            <Link key={repo.id} to={`/repos/${repo.name}`} >{repo.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposPage;
