import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function App() {
	const [counter, setCounter] = useState(0);
	return (
		<View style={styles.container}>
			<Text style={{ textAlign: "center", fontSize: "50px" }}>
				Counter: {counter}
			</Text>
			<Button
				onPress={() => {
					setCounter((prev) => prev + 1);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		textAlign: "center",
	},
});
