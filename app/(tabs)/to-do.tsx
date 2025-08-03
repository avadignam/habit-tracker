import { Icon } from "@/components/Icon";
import Input from "@/components/Input";
import ThemeProvider from "@/components/ThemeProvider";
import { Todo } from "@/components/Todo";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

export default function ToDoPage() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  function addTask() {
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  }

  return (
    <ThemeProvider>
      <View>
        <View style={{ alignItems: "flex-end", display: "flex" }}>
          <Pressable aria-label="Add a task" disabled={!todo}>
            <Icon name="add" />
          </Pressable>
        </View>
        <Input value={todo} onChangeText={setTodo} onSubmitEditing={addTask} />
        <FlatList
          style={styles.todos}
          data={todos}
          renderItem={({ item }) => <Todo text={item} />}
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
