import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { icons } from '@/constants/icons';

interface MovieCardProps {
	movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
	return (
		<Link href={`/movies/${movie.id}`} asChild>
			<TouchableOpacity className="w-[30%] mb-4 flex-col">
				<View className="w-full h-44 rounded-2xl overflow-hidden mb-2 bg-[#0F0D23]">
					<Image
						source={{ uri: movie.poster_path }}
						className="w-full h-full rounded-2xl"
						resizeMode="cover"
					/>
				</View>

				<Text className="text-white font-bold text-xs" numberOfLines={1}>
					{movie.title}
				</Text>

				<View className="flex-row items-center mt-1">
					<Image source={icons.star} className="w-3 h-3 mr-1" tintColor="#FFD700" />
					<Text className="text-white text-xs font-semibold">
						{movie.vote_average ? movie.vote_average.toFixed(1) : '4.6'}
					</Text>
				</View>

				<Text className="text-[#A8B5DB] text-[10px] mt-0.5" numberOfLines={1}>
					Action • Movie
				</Text>
			</TouchableOpacity>
		</Link>
	);
}
