import { Icon, Input } from "@/components";
import ThemeProvider from "@/components/ThemeProvider";
import TodoComponent from "@/modules/to-dos/Todo";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useAddRowCallback, useRowIds } from "tinybase/ui-react";
import { Columns, Todo, TODO_TABLE } from "../../modules/to-dos/consts";

export default function ToDoPage() {
  const [todo, setTodo] = useState<string>("");

  const handleAddTask = useAddRowCallback<Todo>(TODO_TABLE, ({ title }) => {
    setTodo("");
    return { [Columns.title]: title };
  });

  return (
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
          onSubmitEditing={() => handleAddTask({ title: todo })}
        />
        <FlatList
          style={styles.todos}
          data={useRowIds(TODO_TABLE)}
          renderItem={({ item: id }) => <TodoComponent id={id} />}
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  todos: {
    marginTop: 8,
  },
});
