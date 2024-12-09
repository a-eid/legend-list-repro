import { Text } from "react-native";
import { LegendList } from "@legendapp/list";

export default function HomeScreen() {
	return (
		<LegendList
			data={["one", "two", "three", "four", "five", "six"]}
			estimatedItemSize={100}
			renderItem={({ item }) => (
				<Text style={{ color: "white", height: 100 }}>{item}</Text>
			)}
		/>
	);
}
