import Input from "@/components/Input";
import Text from "@/components/Text";
import ThemeProvider, { Theme } from "@/components/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, View } from "react-native";

function addTask(task: string) {
  alert(task);
}

export default function ToDoPage() {
  const { primary } = Theme;
  const [todo, setTodo] = useState<string>();
  return (
    <ThemeProvider>
      <View>
        <View style={{ alignItems: "flex-end", display: "flex" }}>
          <Pressable
            aria-label="Add a task"
            disabled={!todo}
            onPress={() => {
              if (todo) addTask(todo);
            }}
          >
            <Ionicons name="add" size={24} color={primary} />
          </Pressable>
        </View>
        <Text className="bg-orange-400">{todo}</Text>
        <Input onChangeText={setTodo} />
      </View>
    </ThemeProvider>
  );
}
