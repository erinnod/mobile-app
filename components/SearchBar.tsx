import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

// this just tells the app what the props types should be
interface Props {
	placeHolder: string
	onPress?: () => void
	value: string
	onChangeText: (text: string) => void
}

const SearchBar = ({ placeHolder, onPress, value, onChangeText }: Props) => {
	return (
		<View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
			<Image
				source={icons.search}
				className='size-5'
				resizeMode='contain'
				tintColor='#Ab8bff'
			/>
			<TextInput
				placeholder={placeHolder}
				value={value}
				onChangeText={onChangeText}
				placeholderTextColor='#a8b5db'
				className='flex-1 ml-2 text-white'
			/>
		</View>
	)
}

export default SearchBar
