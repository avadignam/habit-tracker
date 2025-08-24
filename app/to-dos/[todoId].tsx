import { Text } from "@/modules/display/blocks";
import { SafeAreaView, ThemeProvider } from "@/modules/display/wrapper";
import { TODO_TABLE } from "@/modules/to-dos";
import { useLocalSearchParams } from "expo-router";
import { useRow } from "tinybase/ui-react";

export default function FullTodo() {
  const { todoId } = useLocalSearchParams();
  const { title } = useRow(TODO_TABLE, todoId as string);
  return (
    <ThemeProvider>
      <SafeAreaView showBackButton>
        <Text>{title}</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}
