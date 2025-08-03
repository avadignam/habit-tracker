import { Theme } from "@/components/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const {
    fontFamily,
    primary: olive,
    primaryTranslucent: oliveTranslucent,
  } = Theme;
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerTitleStyle: { fontFamily },
          headerTintColor: olive,
          tabBarLabelStyle: {
            fontFamily,
          },
          headerShown: false,
          tabBarActiveTintColor: olive,
          tabBarActiveBackgroundColor: oliveTranslucent,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/to-do"
          options={{
            title: "To Do",
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons
                name={focused ? "pencil-sharp" : "pencil-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
