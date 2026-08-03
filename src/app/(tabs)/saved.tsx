import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MovieCard from '@/components/MovieCard';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { MOCK_MOVIES } from '@/services/api';

export default function SavedScreen() {
	const [savedMovies, setSavedMovies] = useState<Movie[]>([]);

	useEffect(() => {
		// Mock saved movies
		setSavedMovies(MOCK_MOVIES.slice(0, 4));
	}, []);

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

					<Text className="text-white font-bold text-xl mb-4">
						Saved Movies
					</Text>

					{savedMovies.length === 0 ? (
						<View className="py-20 items-center justify-center">
							<Text className="text-[#A8B5DB] text-base">No saved movies yet.</Text>
						</View>
					) : (
						<View className="flex-row flex-wrap justify-between">
							{savedMovies.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</View>
					)}
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}
