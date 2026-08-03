import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import TrendingCard from '@/components/TrendingCard';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';

export default function Index() {
	const router = useRouter();
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const loadMovies = async () => {
			setLoading(true);
			const data = await fetchMovies({});
			setMovies(data);
			setLoading(false);
		};

		loadMovies();
	}, []);

	const popularMovies = movies.slice(0, 5);
	const latestMovies = movies;

	return (
		<View className="flex-1 bg-[#030014]">
			<Image
				source={images.bg}
				className="absolute w-full h-full"
				resizeMode="cover"
			/>

			<SafeAreaView className="flex-1">
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						paddingBottom: 100,
						paddingHorizontal: 20,
					}}
				>
					{/* Logo */}
					<View className="items-center mt-2 mb-6">
						<Image
							source={icons.logo}
							className="w-12 h-10"
							resizeMode="contain"
						/>
					</View>

					{/* Search Bar */}
					<View className="mb-6">
						<SearchBar onPress={() => router.push('/search')} />
					</View>

					{loading ? (
						<View className="py-20 items-center justify-center">
							<ActivityIndicator size="large" color="#AB8BFF" />
						</View>
					) : (
						<>
							{/* Popular Movies Section */}
							<View className="mb-6">
								<Text className="text-white font-bold text-lg mb-3">
									Popular movies
								</Text>
								<FlatList
									data={popularMovies}
									horizontal
									showsHorizontalScrollIndicator={false}
									keyExtractor={(item) => item.id.toString()}
									renderItem={({ item, index }) => (
										<TrendingCard
											movie={item}
											index={index}
										/>
									)}
								/>
							</View>

							{/* Latest Movies Section */}
							<View>
								<Text className="text-white font-bold text-lg mb-3">
									Latest movies
								</Text>
								<View className="flex-row flex-wrap justify-between">
									{latestMovies.map((movie) => (
										<MovieCard
											key={movie.id}
											movie={movie}
										/>
									))}
								</View>
							</View>
						</>
					)}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
