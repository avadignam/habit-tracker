import { Icon } from "@/modules/display/blocks";
import Back from "@/modules/display/buttons/Back";
import SafeAreaView from "@/modules/display/wrapper/SafeAreaView";
import ThemeProvider, { Theme } from "@/modules/display/wrapper/ThemeProvider";
import { LISTS_TABLE, TodoComponent } from "@/modules/to-dos";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, TextInput, View } from "react-native";
import { LocalRowsView, useRow, useSetRowCallback } from "tinybase/ui-react";

export default function List() {
  const { navigate } = useRouter();
  const { listId } = useLocalSearchParams();
  const row = useRow(LISTS_TABLE, listId as string);

  const handleUpdateTitle = useSetRowCallback(
    LISTS_TABLE,
    listId as string,
    (title: string) => ({ title })
  );

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
          <Back dismiss />
          <Pressable
            onPress={() => navigate(`/to-dos/${listId}/create-task`)}
            aria-label="Add a task"
          >
            <Icon name="add" />
          </Pressable>
        </View>
        <View>
          <TextInput
            style={{
              fontFamily: Theme.fontFamily,
              color: Theme.primary,
              fontWeight: "600",
              marginBottom: 20,
              fontSize: 20,
            }}
            onChangeText={handleUpdateTitle}
          >
            {row.title}
          </TextInput>
        </View>
        <LocalRowsView
          relationshipId="parentTodoList"
          remoteRowId={listId as string}
          rowComponent={(props) => <TodoComponent id={props.rowId} />}
        />
      </ThemeProvider>
    </SafeAreaView>
  );
}
