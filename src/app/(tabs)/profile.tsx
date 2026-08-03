import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { icons } from '@/constants/icons';
import { images } from '@/constants/images';

export default function ProfileScreen() {
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

					{/* Profile Avatar & Info */}
					<View className="items-center mb-8">
						<View className="w-24 h-24 rounded-full bg-[#221F3D] items-center justify-center mb-3 border-2 border-[#AB8BFF] overflow-hidden">
							<Image
								source={icons.person}
								className="w-12 h-12"
								tintColor="#AB8BFF"
							/>
						</View>
						<Text className="text-white font-bold text-xl">Movie Enthusiast</Text>
						<Text className="text-[#A8B5DB] text-sm mt-1">user@movieapp.com</Text>
					</View>

					{/* Stats Cards */}
					<View className="flex-row justify-between mb-8">
						<View className="bg-[#0F0D23] flex-1 mr-2 p-4 rounded-2xl items-center border border-[#221F3D]">
							<Text className="text-[#AB8BFF] font-black text-2xl">24</Text>
							<Text className="text-[#A8B5DB] text-xs mt-1">Watched</Text>
						</View>
						<View className="bg-[#0F0D23] flex-1 mx-1 p-4 rounded-2xl items-center border border-[#221F3D]">
							<Text className="text-[#AB8BFF] font-black text-2xl">4</Text>
							<Text className="text-[#A8B5DB] text-xs mt-1">Saved</Text>
						</View>
						<View className="bg-[#0F0D23] flex-1 ml-2 p-4 rounded-2xl items-center border border-[#221F3D]">
							<Text className="text-[#AB8BFF] font-black text-2xl">12</Text>
							<Text className="text-[#A8B5DB] text-xs mt-1">Reviews</Text>
						</View>
					</View>

					{/* Menu Items */}
					<View className="bg-[#0F0D23] rounded-2xl p-2 border border-[#221F3D]">
						<TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#221F3D]">
							<Text className="text-white font-semibold">Account Settings</Text>
							<Image source={icons.arrow} className="w-4 h-4" tintColor="#A8B5DB" />
						</TouchableOpacity>
						<TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#221F3D]">
							<Text className="text-white font-semibold">Notifications</Text>
							<Image source={icons.arrow} className="w-4 h-4" tintColor="#A8B5DB" />
						</TouchableOpacity>
						<TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#221F3D]">
							<Text className="text-white font-semibold">App Language</Text>
							<Image source={icons.arrow} className="w-4 h-4" tintColor="#A8B5DB" />
						</TouchableOpacity>
						<TouchableOpacity className="flex-row items-center justify-between p-4">
							<Text className="text-red-400 font-semibold">Log Out</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}