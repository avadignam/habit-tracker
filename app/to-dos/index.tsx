import { Icon, Input, SafeAreaView } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";
import { Columns, Todo, TODO_TABLE, TodoComponent } from "@/modules/to-dos";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useAddRowCallback, useRowIds } from "tinybase/ui-react";

export default function ToDoPage() {
  const [todo, setTodo] = useState<string>("");

  const handleAddTask = useAddRowCallback<Todo>(TODO_TABLE, ({ title }) => {
    setTodo("");
    return { [Columns.title]: title };
  });

  return (
    <ThemeProvider>
      <SafeAreaView>
        <View
          style={{ alignItems: "flex-end", marginBottom: 10, display: "flex" }}
        >
          <Pressable aria-label="Add a task" disabled={!todo}>
            <Icon name="add" />
          </Pressable>
        </View>
        <Input
          value={todo}
          onChangeText={setTodo}
          onSubmitEditing={() => handleAddTask({ title: todo })}
        />
        <FlatList
          style={styles.todos}
          data={useRowIds(TODO_TABLE)}
          renderItem={({ item: id }) => <TodoComponent id={id} />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  todos: {
    marginTop: 10,
  },
});
