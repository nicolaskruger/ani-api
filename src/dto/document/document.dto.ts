

export interface Titles {
    en: string;
    jp: string;
    it: string;
}
export interface Descriptions {
    en: string;
    it: string;
}
export interface DocumentAnime {
    anilist_id: number;
    mal_id: number;
    format: number;
    status: number;
    titles: Titles;
    descriptions: Descriptions;
    start_date: Date;
    end_date: Date;
    season_period: number;
    season_year: number;
    episodes_count: number;
    episode_duration: number;
    cover_image: string;
    cover_color: string;
    banner_image: string;
    genres: string[];
    score: number;
    id: number;
}
export interface DataAnime {
    current_page: number;
    count: number;
    documents: DocumentAnime[];
    last_page: number;
}
export interface Anime {
    status_code: number;
    message: string;
    data: DataAnime;
    version: string;
}
export interface SingleAnime {
    status_code: number;
    message: string;
    data: DocumentAnime;
    version: string;
}