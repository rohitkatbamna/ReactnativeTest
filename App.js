import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
	const [counter, setCounter] = useState(0);
	return (
		<View style={styles.container}>
			<Text style={{ textAlign: "center" }}>Counter: {counter}</Text>
			<Button
				title="one two"
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
		justifyContent: "center",
	},
});
