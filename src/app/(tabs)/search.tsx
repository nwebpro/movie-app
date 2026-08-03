import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';

export default function SearchScreen() {
	const [searchQuery, setSearchQuery] = useState('');
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleSearch = async () => {
			setLoading(true);
			const results = await fetchMovies({ query: searchQuery });
			setMovies(results);
			setLoading(false);
		};

		const timer = setTimeout(() => {
			handleSearch();
		}, 300);

		return () => clearTimeout(timer);
	}, [searchQuery]);

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
					contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 20 }}
				>
					{/* Header Logo */}
					<View className="items-center mt-2 mb-6">
						<Image
							source={icons.logo}
							className="w-12 h-10"
							resizeMode="contain"
						/>
					</View>

					{/* Search Bar */}
					<View className="mb-6">
						<SearchBar
							value={searchQuery}
							onChangeText={setSearchQuery}
							placeholder="Search through 300+ movies online"
						/>
					</View>

					{/* Search Results */}
					<Text className="text-white font-bold text-lg mb-4">
						{searchQuery ? `Search Results for "${searchQuery}"` : 'All Movies'}
					</Text>

					{loading ? (
						<View className="py-20 items-center justify-center">
							<ActivityIndicator size="large" color="#AB8BFF" />
						</View>
					) : movies.length === 0 ? (
						<View className="py-20 items-center justify-center">
							<Text className="text-[#A8B5DB] text-base">No movies found.</Text>
						</View>
					) : (
						<View className="flex-row flex-wrap justify-between">
							{movies.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</View>
					)}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
