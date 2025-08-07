import { SafeAreaView, Text } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";

export default function Notes() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Text>notes will go here</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
