import axios from "axios";

export const ACCESS_TOKEN_AUTH = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjZlODE5ODE2NmY1YTJhMjNjOGYyNmViNmQ4MWI1ZSIsInN1YiI6IjY0YmY4NjQ2NmQ0Yzk3MDBjNWUzNWY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvOatQVQg1141mHLWXT07YRL09Wv5X-DaEW9M7gsdF4';

export const API_KEY_AUTH = '366e8198166f5a2a23c8f26eb6d81b5e';

export const DOMAIN_URL = 'https://api.tmdb.org';

export const IMAGE_URL_DOMAIN = `https://image.tmdb.org/t/p/`;

export const generateApiOption = (method = 'GET') => {
    return {
        method,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
        }
    }
}
export const axiosInstance = axios.create({
    baseURL: DOMAIN_URL,
    timeout: 8000
})