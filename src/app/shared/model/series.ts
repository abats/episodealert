export class Series {
    id: number;
    name: string;
    unique_name: string;
    banner_image: string;
    banner_image_converted: boolean;
    category: string;
    count: string;
    created_at: string;
    description: string;
    episode_amount: string;
    fanart_image: string;
    fanart_image_converted: boolean;
    firstaired: string;
    following: boolean;
    has_specials: boolean;
    imdb_id: string;
    popular: boolean;
    poster_image: string;
    poster_image_converted: boolean;
    rating: string;
    rating_updated: string;
    season_amount: string;
    series_id: string;
    specials_amount: string;
    status: string;
    trend: string;
    updated_at: string;

    supername: string = this.name + this.unique_name;
}
