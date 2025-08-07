import { SafeAreaView } from "@/components";
import Text from "@/components/Text";
import ThemeProvider, { Theme } from "@/components/ThemeProvider";

export default function Index() {
  const { fontFamily } = Theme;
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Text style={{ fontFamily }}>
          Edit app/index.tsx to edit this screen.
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
