import { Text } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";
import { View } from "react-native";

export default function NotFound() {
  return (
    <ThemeProvider>
      <View>
        <Text>Nothing to see here!</Text>
      </View>
    </ThemeProvider>
  );
}
