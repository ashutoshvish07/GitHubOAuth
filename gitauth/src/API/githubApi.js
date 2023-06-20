import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const fetchTrendingRepos = async (params) => {
    debugger
    const response = await axios.get("https://api.github.com/repositories?sort=created&direction=desc").then((res) => {
        return res.data
    })
    return response;
};

export const fetchRepoDetails = async (owner, repo) => {
    debugger;
    const response = await axios.get(`${API_BASE_URL}/repos/${owner}/${repo}`).then((res) => res.data);
    return response;
};
