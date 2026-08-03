import { Image, TextInput, View } from 'react-native';

import { icons } from '@/constants/icons';

interface Props {
	placeholder?: string;
	value?: string;
	onChangeText?: (text: string) => void;
	onPress?: () => void;
}

export default function SearchBar({
	placeholder = 'Search through 300+ movies online',
	value,
	onChangeText,
	onPress,
}: Props) {
	return (
		<View className="flex-row items-center bg-[#0F0D23] px-3.5 py-2 rounded-full w-full">
			<Image
				source={icons.search}
				className="w-5 h-5 mr-3"
				tintColor="#A8B5DB"
				resizeMode="contain"
			/>
			<TextInput
				onPress={onPress}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				placeholderTextColor="#A8B5DB"
				className="flex-1 text-white text-sm font-regular"
			/>
		</View>
	);
}
