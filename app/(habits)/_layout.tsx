import { SafeAreaView, ThemeProvider } from "@/modules/display/wrapper";
import { Tabs } from "expo-router";

export default function HabitsLayout() {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Tabs>
          <Tabs.Screen name="daily-habits/index" options={{ title: "Daily" }} />
          <Tabs.Screen
            name="weekly-habits/index"
            options={{ title: "Weekly" }}
          />
        </Tabs>
      </SafeAreaView>
    </ThemeProvider>
  );
}
