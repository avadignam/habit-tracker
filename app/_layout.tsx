import { Icon } from "@/components";
import MainNavigation from "@/modules/navigation/MainNavigation";
import { LISTS_TABLE, TODO_TABLE } from "@/modules/to-dos";
import { Tabs } from "expo-router";
import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMergeableStore } from "tinybase/mergeable-store";
import { createLocalPersister } from "tinybase/persisters/persister-browser";
import { createExpoSqlitePersister } from "tinybase/persisters/persister-expo-sqlite";
import { createRelationships } from "tinybase/relationships";
import { Store } from "tinybase/store";
import {
  Provider,
  useCreateMergeableStore,
  useCreatePersister,
  useCreateRelationships,
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
  const store = useCreateMergeableStore(createMergeableStore);
  const relationships = useCreateRelationships(store, (store) =>
    createRelationships(store).setRelationshipDefinition(
      "parentTodoList",
      TODO_TABLE,
      LISTS_TABLE,
      "parentId"
    )
  );

  useAndStartPersister(store);
  return (
    <Provider store={store} relationships={relationships}>
      <SafeAreaProvider>
        <Tabs
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <MainNavigation {...props} />}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ focused }) => (
                <Icon name={focused ? "home-sharp" : "home-outline"} />
              ),
            }}
          />
          <Tabs.Screen
            name="(habits)"
            options={{
              title: "Habits",
              tabBarIcon: ({ focused }) => (
                <Icon name={focused ? "alarm-sharp" : "alarm-outline"} />
              ),
            }}
          />
          <Tabs.Screen
            name="to-dos"
            options={{
              title: "To Do",
              tabBarIcon: ({ focused }) => (
                <Icon
                  name={focused ? "checkmark-sharp" : "checkmark-outline"}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="notes/index"
            options={{
              title: "Notes",
              tabBarIcon: ({ focused }) => (
                <Icon name={focused ? "pencil-sharp" : "pencil-outline"} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaProvider>
    </Provider>
  );
}
