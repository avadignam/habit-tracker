import { Theme } from "@/components/ThemeProvider";
import { RealmProvider } from "@/db/RealmContext";
import { Task } from "@/db/schemas/Task";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  const {
    fontFamily,
    primary: olive,
    primaryTranslucent: oliveTranslucent,
  } = Theme;
  return (
    <RealmProvider schema={[Task]}>
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
    </RealmProvider>
  );
}
