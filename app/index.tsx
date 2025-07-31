import Text from "@/components/Text";
import ThemeProvider, { Theme } from "@/components/ThemeProvider";

export default function Index() {
  const { fontFamily } = Theme;
  return (
    <ThemeProvider>
      <Text style={{ fontFamily }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </ThemeProvider>
  );
}
