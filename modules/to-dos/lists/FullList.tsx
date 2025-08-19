import { Icon, Input, SafeAreaView } from "@/components";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useAddRowCallback, useRowIds } from "tinybase/ui-react";
import { Todo, TODO_TABLE, TodoColumns } from "../consts";
import TodoComponent from "../Todo";

export default function FullList() {
  const [todo, setTodo] = useState<string>("");

  const handleAddTask = useAddRowCallback<Todo>(TODO_TABLE, ({ title }) => {
    setTodo("");
    return { [TodoColumns.title]: title };
  });

  return (
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
  );
}

const styles = StyleSheet.create({
  todos: {
    marginTop: 10,
  },
});
