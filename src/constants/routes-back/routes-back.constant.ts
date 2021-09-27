const GENERATE_TOKEN = "https://aniapi.com/login/";
const BASE_URL = "https://api.aniapi.com";
const ROUTES_BACK = {
    ME: "/v1/auth/me",
    ANIME: "/v1/anime",
    EPISODE: "/v1/episode",
    ANIME_PARAM: (id: number) => `/v1/anime/${id}`
}

export { GENERATE_TOKEN, BASE_URL, ROUTES_BACK }