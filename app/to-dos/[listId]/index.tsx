import { Icon } from "@/modules/display/blocks";
import { Delete } from "@/modules/display/buttons";
import Back from "@/modules/display/buttons/Back";
import { ColorValues } from "@/modules/display/inputs";
import SafeAreaView from "@/modules/display/wrapper/SafeAreaView";
import ThemeProvider, { Theme } from "@/modules/display/wrapper/ThemeProvider";
import { LISTS_TABLE, TodoComponent } from "@/modules/to-dos";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, TextInput, View } from "react-native";
import {
  LocalRowsView,
  useDelRowCallback,
  useRow,
  useSetRowCallback,
} from "tinybase/ui-react";

export default function List() {
  const { navigate, dismissAll } = useRouter();
  const { listId } = useLocalSearchParams();
  const { title, color } = useRow(LISTS_TABLE, listId as string);

  const handleUpdateTitle = useSetRowCallback(
    LISTS_TABLE,
    listId as string,
    (title: string) => ({ title })
  );

  function handleDeleteList() {
    Alert.alert(
      "Are you sure?",
      "Deleting this list will delete all associated tasks",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Confirm",
          style: "destructive",
          onPress: () => {
            useDelRowCallback(LISTS_TABLE, listId as string, undefined, () => {
              dismissAll();
            });
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView>
      <ThemeProvider>
        <View
          style={{
            justifyContent: "space-between",
            marginBottom: 10,
            marginRight: 8,
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
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginRight: 12,
          }}
        >
          <TextInput
            style={{
              fontFamily: Theme.fontFamily,
              color: ColorValues[color as Color],
              fontWeight: "600",
              marginBottom: 20,
              fontSize: 20,
            }}
            onChangeText={handleUpdateTitle}
          >
            {title}
          </TextInput>
          <Delete ariaLabel="Delete list" handleDelete={handleDeleteList} />
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
