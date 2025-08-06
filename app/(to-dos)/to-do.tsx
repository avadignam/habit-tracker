import { Icon, Input } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";
import { addTodo, TODO_TABLE, TodoComponent } from "@/modules/to-dos";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useRowIds, useStore } from "tinybase/ui-react";

export default function ToDoPage() {
  // TODO: error handling
  const store = useStore();
  const [todo, setTodo] = useState<string>("");

  return (
    store && (
      <ThemeProvider>
        <View>
          <View style={{ alignItems: "flex-end", display: "flex" }}>
            <Pressable aria-label="Add a task" disabled={!todo}>
              <Icon name="add" />
            </Pressable>
          </View>
          <Input
            value={todo}
            onChangeText={setTodo}
            onSubmitEditing={() =>
              addTodo(store, { title: todo }, () => setTodo(""))
            }
          />
          <FlatList
            style={styles.todos}
            data={useRowIds(TODO_TABLE)}
            renderItem={({ item: id }) => <TodoComponent id={id} />}
          />
        </View>
      </ThemeProvider>
    )
  );
}

const styles = StyleSheet.create({
  todos: {
    marginTop: 8,
  },
});
