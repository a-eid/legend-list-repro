import { Text, View } from "react-native";
import { LegendList } from "@legendapp/list";

export default function HomeScreen() {
	return (
		<LegendList
			data={["red", "blue", "green", "yellow", "purple", "orange"]}
			estimatedItemSize={250}
			renderItem={({ item }) => (
				<View style={{ backgroundColor: item, height: 250 }} />
			)}
		/>
	);
}
