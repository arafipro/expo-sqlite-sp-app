import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
