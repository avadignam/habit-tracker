import { Icon } from "@/components/Icon";
import { Theme } from "@/components/ThemeProvider";
import { Tabs } from "expo-router";
import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMergeableStore } from "tinybase/mergeable-store";
import { createLocalPersister } from "tinybase/persisters/persister-browser";
import { createExpoSqlitePersister } from "tinybase/persisters/persister-expo-sqlite";
import { Store } from "tinybase/store";
import {
  Provider,
  useCreateMergeableStore,
  useCreatePersister,
} from "tinybase/ui-react";

const useAndStartPersister = (store: Store) =>
  // Persist store to Expo SQLite or local storage; load once, then auto-save.
  useCreatePersister(
    store,
    (store) =>
      Platform.OS === "web"
        ? createLocalPersister(store, "todos")
        : createExpoSqlitePersister(store, SQLite.openDatabaseSync("todos.db")),
    [],
    (persister) => persister.load().then(persister.startAutoSave)
  );

export default function RootLayout() {
  const {
    fontFamily,
    primary: olive,
    primaryTranslucent: oliveTranslucent,
  } = Theme;

  const store = useCreateMergeableStore(createMergeableStore);

  useAndStartPersister(store);
  return (
    <Provider store={store}>
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
            name="(to-dos)/to-do"
            options={{
              title: "To Do",
              tabBarIcon: ({ focused }) => (
                <Icon name={focused ? "pencil-sharp" : "pencil-outline"} />
              ),
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ focused }) => (
                <Icon name={focused ? "home-sharp" : "home-outline"} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </Provider>
  );
}
