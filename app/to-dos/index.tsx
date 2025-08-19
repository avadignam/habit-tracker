import { Icon, SafeAreaView, Text } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";
import { LISTS_TABLE } from "@/modules/to-dos";
import DisplayList from "@/modules/to-dos/lists/DisplayList";
import { Link } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import { useRowIds } from "tinybase/ui-react";

export default function ToDoPage() {
  const lists = useRowIds(LISTS_TABLE);
  return (
    <ThemeProvider>
      <SafeAreaView>
        <View
          style={{ alignItems: "flex-end", marginBottom: 10, display: "flex" }}
        >
          <Link href="/to-dos/create-list" aria-label="New to-do list">
            <Icon name="add" />
          </Link>
        </View>
        {lists.length ? (
          <FlatList
            style={styles.lists}
            data={lists}
            renderItem={({ item: id }) => <DisplayList id={id} />}
          />
        ) : (
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              marginTop: 100,
              marginHorizontal: 50,
            }}
          >
            You don't have any lists yet! Tap the + to create one
          </Text>
        )}
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  lists: {
    marginTop: 10,
  },
});
