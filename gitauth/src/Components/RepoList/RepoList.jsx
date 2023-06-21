import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingReposAsync } from '../../Features/reposSlice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from '../Card/Card';


const ReposPage = () => {
    const dispatch = useDispatch();
    const trendingRepos = useSelector((state) => state.repos.trendingRepos);
    const loading = useSelector((state) => state.repos.loading);

    useEffect(() => {
        dispatch(fetchTrendingReposAsync());
    }, [dispatch]);

    return (
        <div className='container-fluid'>
            <div className='text-center mt-2 mb-2'>
                <h1>Trending Repositories</h1>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='row row-cols-3 g-4'>
                    {trendingRepos.map((repo) => (
                        <div className='col col-sm-6 col-md-4 col-lg-3 col-xs-12'>
                            <Card key={repo.id} repo={repo} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReposPage;
