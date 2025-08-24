import { Text } from "@/modules/display/blocks";
import { SafeAreaView, ThemeProvider } from "@/modules/display/wrapper";

export default function Notes() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Text>You don't have any notes yet! Click the '+' to create one</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
