import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTrendingRepos, fetchRepoDetails } from '../API/githubApi';

const initialState = {
    trendingRepos: [],
    selectedRepo: null,
    loading: false,
    error: null,
};

export const fetchTrendingReposAsync = createAsyncThunk(
    'repos/fetchTrendingRepos',
    async (params) => {
        const repos = await fetchTrendingRepos(params);
        return repos;
    }
);

export const fetchRepoDetailsAsync = createAsyncThunk(
    'repos/fetchRepoDetails',
    async ({ owner, repo }) => {
        const repoDetails = await fetchRepoDetails(owner, repo);
        return repoDetails;
    }
);

const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingReposAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTrendingReposAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.trendingRepos = action.payload;
            })
            .addCase(fetchTrendingReposAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchRepoDetailsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRepoDetailsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRepo = action.payload;
            })
            .addCase(fetchRepoDetailsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default reposSlice.reducer;
