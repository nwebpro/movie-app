import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovieDetails } from '@/services/api';

export default function MovieDetailsScreen() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	const [movie, setMovie] = useState<MovieDetails | null>(null);
	const [loading, setLoading] = useState(true);
	const [saved, setSaved] = useState(false);

	useEffect(() => {
		const loadDetails = async () => {
			if (id) {
				setLoading(true);
				const details = await fetchMovieDetails(id as string);
				setMovie(details);
				setLoading(false);
			}
		};
		loadDetails();
	}, [id]);

	if (loading || !movie) {
		return (
			<View className="flex-1 bg-[#030014] items-center justify-center">
				<ActivityIndicator size="large" color="#AB8BFF" />
			</View>
		);
	}

	return (
		<View className="flex-1 bg-[#030014]">
			<Image
				source={images.bg}
				className="absolute w-full h-full"
				resizeMode="cover"
			/>

			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
				{/* Movie Poster Backdrop Container */}
				<View className="relative w-full h-96">
					<Image
						source={{ uri: movie.poster_path || undefined }}
						className="w-full h-full"
						resizeMode="cover"
					/>
					<View className="absolute inset-0 bg-black/40" />
					<View className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />

					{/* Navigation Overlay */}
					<SafeAreaView className="absolute top-0 left-0 right-0 flex-row justify-between px-5 pt-2">
						<TouchableOpacity
							onPress={() => router.back()}
							className="w-10 h-10 rounded-full bg-[#0F0D23]/80 items-center justify-center border border-[#221F3D]"
						>
							<Image
								source={icons.arrow}
								className="w-5 h-5"
								tintColor="#FFFFFF"
								style={{ transform: [{ rotate: '180deg' }] }}
							/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => setSaved(!saved)}
							className="w-10 h-10 rounded-full bg-[#0F0D23]/80 items-center justify-center border border-[#221F3D]"
						>
							<Image
								source={icons.save}
								className="w-5 h-5"
								tintColor={saved ? '#AB8BFF' : '#FFFFFF'}
							/>
						</TouchableOpacity>
					</SafeAreaView>
				</View>

				{/* Content */}
				<View className="px-5 -mt-12">
					<Text className="text-white font-extrabold text-2xl mb-2">
						{movie.title}
					</Text>

					{/* Metadata Badges */}
					<View className="flex-row items-center flex-wrap gap-3 mb-4">
						<View className="flex-row items-center bg-[#221F3D] px-2.5 py-1 rounded-md">
							<Image source={icons.star} className="w-3.5 h-3.5 mr-1" tintColor="#FFD700" />
							<Text className="text-white text-xs font-bold">
								{movie.vote_average ? movie.vote_average.toFixed(1) : '4.6'}
							</Text>
						</View>

						<Text className="text-[#A8B5DB] text-xs">
							{movie.release_date ? movie.release_date.split('-')[0] : '2024'}
						</Text>

						<Text className="text-[#A8B5DB] text-xs">•</Text>

						<Text className="text-[#A8B5DB] text-xs">
							{movie.runtime ? `${movie.runtime}m` : '2h 15m'}
						</Text>

						<Text className="text-[#A8B5DB] text-xs">•</Text>

						<Text className="text-[#A8B5DB] text-xs">
							{movie.original_language?.toUpperCase() || 'EN'}
						</Text>
					</View>

					{/* Genres */}
					<View className="flex-row flex-wrap gap-2 mb-6">
						{movie.genres && movie.genres.length > 0 ? (
							movie.genres.map((g) => (
								<View key={g.id} className="bg-[#0F0D23] px-3 py-1.5 rounded-full border border-[#221F3D]">
									<Text className="text-[#A8B5DB] text-xs font-medium">{g.name}</Text>
								</View>
							))
						) : (
							<View className="bg-[#0F0D23] px-3 py-1.5 rounded-full border border-[#221F3D]">
								<Text className="text-[#A8B5DB] text-xs font-medium">Action</Text>
							</View>
						)}
					</View>

					{/* Play Trailer Button */}
					<TouchableOpacity className="flex-row items-center justify-center bg-[#AB8BFF] py-3.5 rounded-2xl mb-6">
						<Image source={icons.play} className="w-5 h-5 mr-2" tintColor="#151312" />
						<Text className="text-[#151312] font-bold text-base">Watch Trailer</Text>
					</TouchableOpacity>

					{/* Overview */}
					<Text className="text-white font-bold text-lg mb-2">Overview</Text>
					<Text className="text-[#A8B5DB] text-sm leading-6">
						{movie.overview || 'No overview available.'}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}
