import { Link } from 'expo-router';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { icons } from '@/constants/icons';
import { images } from '@/constants/images';

interface TrendingCardProps {
	movie: Movie;
	index: number;
}

export default function TrendingCard({ movie, index }: TrendingCardProps) {
	return (
		<Link href={`/movies/${movie.id}`} asChild>
			<TouchableOpacity className="w-36 mr-4 flex-col items-start">
				<View className="relative w-full h-52 rounded-2xl overflow-hidden mb-2">
					<Image
						source={{ uri: movie.poster_path }}
						className="w-full h-full rounded-2xl"
						resizeMode="cover"
					/>

					{/* Rating Badge */}
					<View className="absolute top-2 right-2 flex-row items-center bg-[#221F3D]/80 px-2 py-1 rounded-md">
						<Image source={icons.star} className="w-3 h-3 mr-1" tintColor="#FFD700" />
						<Text className="text-white text-xs font-bold">
							{movie.vote_average ? movie.vote_average.toFixed(1) : '4.6'}
						</Text>
					</View>

					{/* Big Number Ranking */}
					<View className="absolute bottom-0 left-0">
						<Text
							className="text-6xl font-black text-white px-2 py-1 shadow-lg"
							style={{
								textShadowColor: 'rgba(0, 0, 0, 0.75)',
								textShadowOffset: { width: -1, height: 1 },
								textShadowRadius: 10,
							}}
						>
							{index + 1}
						</Text>
					</View>
				</View>

				<Text className="text-white font-bold text-sm" numberOfLines={1}>
					{movie.title}
				</Text>
				<Text className="text-[#A8B5DB] text-xs mt-0.5">Action • Movie</Text>
			</TouchableOpacity>
		</Link>
	);
}
