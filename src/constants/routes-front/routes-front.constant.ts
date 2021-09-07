const ROUTE_FRONT = {
    LOGIN: "/login",
    SEARCH: "/search",
    SEARCH_QUERY: (name?: string, page?: number) => `/search?name=${name || ""}&page=${page || "0"}`
}

export { ROUTE_FRONT }