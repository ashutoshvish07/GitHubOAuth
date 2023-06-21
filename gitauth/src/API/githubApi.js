import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const fetchTrendingRepos = async (params) => {
    let url = "https://api.github.com/repositories?sort=created&direction=desc"
    if (params) {
        url = url + `&q=${params}`
    }
    const response = await axios.get(url).then((res) => {
        return res.data
    })
    return response;
};

export const fetchRepoDetails = async (owner, repo) => {
    const response = await axios.get(`${API_BASE_URL}/repos/${owner}/${repo}`).then((res) => res.data);
    return response;
};
