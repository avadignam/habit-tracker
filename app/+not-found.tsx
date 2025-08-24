import { Text } from "@/modules/display/blocks";
import ThemeProvider from "@/modules/display/wrapper/ThemeProvider";
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
