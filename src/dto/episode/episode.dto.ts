export interface EpisodeDocument {
    anime_id: number;
    number: number;
    title: string;
    video: string;
    source: string;
    locale: string;
    id: number;
}

export interface EpisodeData {
    current_page: number;
    count: number;
    documents: EpisodeDocument[];
    last_page: number;
}

export interface Episode {
    status_code: number;
    message: string;
    data: EpisodeData;
    version: string;
}