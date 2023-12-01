export class Movies {
    id?: number;
    title?: string;
    description?: string;
    img?: string;
    duration?: string;
    genre?: Genre[];
    release_date?: string;
    trailer?: string;
    watchlist?: boolean;
}

interface Genre{}