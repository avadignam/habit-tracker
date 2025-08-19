import { Icon, SafeAreaView, Text } from "@/components";
import BackButton from "@/components/BackButton";
import ThemeProvider from "@/components/ThemeProvider";
import { LISTS_TABLE } from "@/modules/to-dos";
import { useLocalSearchParams } from "expo-router";
import { Pressable, View } from "react-native";
import { useRow } from "tinybase/ui-react";

export default function List() {
  const { listId } = useLocalSearchParams();
  const row = useRow(LISTS_TABLE, listId as string);

  return (
    <SafeAreaView>
      <ThemeProvider>
        <View
          style={{
            justifyContent: "space-between",
            marginBottom: 10,
            flexDirection: "row",
          }}
        >
          <BackButton dismiss />
          <Pressable aria-label="Add a task">
            <Icon name="add" />
          </Pressable>
        </View>
        <Text>{row.title}</Text>
        <Text>To Dos</Text>
      </ThemeProvider>
    </SafeAreaView>
  );
}
