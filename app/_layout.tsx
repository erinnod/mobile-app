import { Stack } from 'expo-router'
import './global.css'

export default function RootLayout() {
	return (
		<Stack>
			{/* removes the headers at the top of the screen */}
			<Stack.Screen
				name='(tabs)'
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='movies/[id]'
				options={{ headerShown: false }}
			/>
		</Stack>
	)
}
