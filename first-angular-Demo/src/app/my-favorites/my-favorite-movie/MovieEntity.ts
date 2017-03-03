
export class BelongsTo {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    }

	export class Genre {
        id: number;
        name: string;
    }

    export class ProductionCompany {
        name: string;
        id: number;
    }

    export class ProductionCountry {
        iso_3166_1: string;
        name: string;
    }

    export class SpokenLanguage {
        iso_639_1: string;
        name: string;
    }

    export class MovieEntity {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection: BelongsToCollection;
        budget: number;
        genres: Genre[];
        homepage: string;
        id: number;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        production_companies: ProductionCompany[];
        production_countries: ProductionCountry[];
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: SpokenLanguage[];
        status: string;
        tagline: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

	export class CastEntity {
        cast_id: number;
        character: string;
        credit_id: string;
        id: number;
        name: string;
        order: number;
        profile_path: string;
    }

	/*
	export class Crew {
        credit_id: string;
        department: string;
        id: number;
        job: string;
        name: string;
        profile_path: string;
    }

    export class MovieCredits {
        id: number;
        cast: Cast[];
        crew: Crew[];
    }
	*/