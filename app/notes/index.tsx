import { SafeAreaView, Text } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";

export default function Notes() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Text>You don't have any notes yet! Click the '+' to create one</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
