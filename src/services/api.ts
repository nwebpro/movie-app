const TMDB_CONFIG = {
	BASE_URL: 'https://api.themoviedb.org/3',
	IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/w500',
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
};

export const MOCK_MOVIES: Movie[] = [
	{
		id: 939243,
		title: 'Gladiator II',
		adult: false,
		backdrop_path: '/gE1231.jpg',
		genre_ids: [28, 12, 18],
		original_language: 'en',
		original_title: 'Gladiator II',
		overview: 'Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius must enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist.',
		popularity: 2845.2,
		poster_path: 'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
		release_date: '2024-11-13',
		video: false,
		vote_average: 4.6,
		vote_count: 1420,
	},
	{
		id: 762509,
		title: 'Mufasa: The Lion King',
		adult: false,
		backdrop_path: '/mufasa.jpg',
		genre_ids: [12, 10751, 16],
		original_language: 'en',
		original_title: 'Mufasa: The Lion King',
		overview: 'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits seeking their destiny.',
		popularity: 2450.5,
		poster_path: 'https://image.tmdb.org/t/p/w500/1XDDXPXGiIWWMsTwSprmVjOhE92.jpg',
		release_date: '2024-12-18',
		video: false,
		vote_average: 4.6,
		vote_count: 980,
	},
	{
		id: 558449,
		title: 'Moana 2',
		adult: false,
		backdrop_path: '/moana2.jpg',
		genre_ids: [16, 12, 10751, 35],
		original_language: 'en',
		original_title: 'Moana 2',
		overview: 'After receiving an unexpected call from her wayfinding ancestors, Moana journeys to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she has ever faced.',
		popularity: 2100.8,
		poster_path: 'https://image.tmdb.org/t/p/w500/402WgikAcjHwELWv25Wq524uGzA.jpg',
		release_date: '2024-11-27',
		video: false,
		vote_average: 4.6,
		vote_count: 1250,
	},
	{
		id: 912649,
		title: 'Venom: The Last Dance',
		adult: false,
		backdrop_path: '/venom.jpg',
		genre_ids: [28, 878, 12],
		original_language: 'en',
		original_title: 'Venom: The Last Dance',
		overview: 'Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie\'s last dance.',
		popularity: 1850.3,
		poster_path: 'https://image.tmdb.org/t/p/w500/kfe2B8C6z836g89Qv25z9Q00456.jpg',
		release_date: '2024-10-22',
		video: false,
		vote_average: 4.6,
		vote_count: 2100,
	},
	{
		id: 402431,
		title: 'Wicked',
		adult: false,
		backdrop_path: '/wicked.jpg',
		genre_ids: [18, 14, 10402],
		original_language: 'en',
		original_title: 'Wicked',
		overview: 'Elphaba, a misunderstood young woman because of her green skin who has yet to discover her true power, and Glinda, a popular young woman gilded by privilege, meet as students at Shiz University in the Land of Oz.',
		popularity: 1720.6,
		poster_path: 'https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaG2mvA9y7OUvh6yE.jpg',
		release_date: '2024-11-20',
		video: false,
		vote_average: 4.6,
		vote_count: 1540,
	},
	{
		id: 1084199,
		title: 'Werewolves',
		adult: false,
		backdrop_path: '/werewolves.jpg',
		genre_ids: [27, 28, 53],
		original_language: 'en',
		original_title: 'Werewolves',
		overview: 'A supermoon event triggers a latent gene in every human on the planet, turning anyone who enters the moonlight into a werewolf for one night.',
		popularity: 1420.1,
		poster_path: 'https://image.tmdb.org/t/p/w500/7BsvSuW2Gvd42571216508.jpg',
		release_date: '2024-12-04',
		video: false,
		vote_average: 4.6,
		vote_count: 310,
	},
	{
		id: 1035048,
		title: 'Aftermath',
		adult: false,
		backdrop_path: '/aftermath.jpg',
		genre_ids: [28, 53],
		original_language: 'en',
		original_title: 'Aftermath',
		overview: 'A former soldier must protect his family when a bio-weapon leak unleashes chaos across the metropolis.',
		popularity: 1310.4,
		poster_path: 'https://image.tmdb.org/t/p/w500/v9Q0yW63jJ1kQe3535.jpg',
		release_date: '2024-11-01',
		video: false,
		vote_average: 4.6,
		vote_count: 450,
	},
	{
		id: 845781,
		title: 'Red One',
		adult: false,
		backdrop_path: '/redone.jpg',
		genre_ids: [28, 35, 14],
		original_language: 'en',
		original_title: 'Red One',
		overview: 'After a villain kidnaps Santa Claus from the North Pole, an E.L.F. (Enforcement Logistics Fortification) operative must team up with the world\'s most infamous bounty hunter to save Christmas.',
		popularity: 1200.7,
		poster_path: 'https://image.tmdb.org/t/p/w500/cdqLnri3Wv2nL2V6D9Q175027.jpg',
		release_date: '2024-10-31',
		video: false,
		vote_average: 4.6,
		vote_count: 890,
	},
	{
		id: 554585,
		title: 'Kraven the Hunter',
		adult: false,
		backdrop_path: '/kraven.jpg',
		genre_ids: [28, 12, 53],
		original_language: 'en',
		original_title: 'Kraven the Hunter',
		overview: 'Kraven\'s complex relationship with his ruthless father, Nikolai Kravinoff, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.',
		popularity: 1150.2,
		poster_path: 'https://image.tmdb.org/t/p/w500/1pP1l6mK3k0N33.jpg',
		release_date: '2024-12-11',
		video: false,
		vote_average: 4.6,
		vote_count: 670,
	},
];

export const fetchMovies = async ({ query = '' }: { query?: string }) => {
	try {
		const apiKey = TMDB_CONFIG.API_KEY;
		if (apiKey) {
			const endpoint = query
				? `${TMDB_CONFIG.BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
				: `${TMDB_CONFIG.BASE_URL}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

			const response = await fetch(endpoint);
			if (response.ok) {
				const data = await response.json();
				return data.results.map((m: any) => ({
					...m,
					poster_path: m.poster_path
						? `${TMDB_CONFIG.IMAGE_BASE_URL}${m.poster_path}`
						: 'https://via.placeholder.com/500x750',
					backdrop_path: m.backdrop_path
						? `${TMDB_CONFIG.IMAGE_BASE_URL}${m.backdrop_path}`
						: '',
				}));
			}
		}
	} catch (error) {
		console.warn('Failed to fetch movies from API, using fallback data:', error);
	}

	if (query) {
		return MOCK_MOVIES.filter((movie) =>
			movie.title.toLowerCase().includes(query.toLowerCase())
		);
	}
	return MOCK_MOVIES;
};

export const fetchMovieDetails = async (movieId: string | number): Promise<MovieDetails | null> => {
	try {
		const apiKey = TMDB_CONFIG.API_KEY;
		if (apiKey) {
			const response = await fetch(
				`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${apiKey}`
			);
			if (response.ok) {
				const data = await response.json();
				return {
					...data,
					poster_path: data.poster_path
						? `${TMDB_CONFIG.IMAGE_BASE_URL}${data.poster_path}`
						: null,
					backdrop_path: data.backdrop_path
						? `${TMDB_CONFIG.IMAGE_BASE_URL}${data.backdrop_path}`
						: null,
				};
			}
		}
	} catch (error) {
		console.warn('Failed to fetch movie details from API:', error);
	}

	const mock = MOCK_MOVIES.find((m) => m.id.toString() === movieId.toString()) || MOCK_MOVIES[0];
	return {
		adult: mock.adult,
		backdrop_path: mock.backdrop_path,
		belongs_to_collection: null,
		budget: 150000000,
		genres: [
			{ id: 28, name: 'Action' },
			{ id: 12, name: 'Adventure' },
		],
		homepage: null,
		id: mock.id,
		imdb_id: 'tt1234567',
		original_language: mock.original_language,
		original_title: mock.original_title,
		overview: mock.overview,
		popularity: mock.popularity,
		poster_path: mock.poster_path,
		production_companies: [],
		production_countries: [],
		release_date: mock.release_date,
		revenue: 450000000,
		runtime: 148,
		spoken_languages: [{ english_name: 'English', iso_639_1: 'en', name: 'English' }],
		status: 'Released',
		tagline: 'The battle continues.',
		title: mock.title,
		video: mock.video,
		vote_average: mock.vote_average,
		vote_count: mock.vote_count,
	};
};
