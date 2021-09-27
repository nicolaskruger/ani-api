const ROUTE_FRONT = {
    LOGIN: "/login",
    SEARCH: "/search",
    ANIME: "/anime",
    SEARCH_QUERY: (name?: string, page?: number) => `/search?name=${name || ""}&page=${page || "0"}`,
    ANIME_QUERY: (id?: number, page: number = 1) => `/anime?id=${id}&page=${page}`
}

export { ROUTE_FRONT }