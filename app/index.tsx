import { Text, Theme, ThemeProvider } from "@/components";

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
