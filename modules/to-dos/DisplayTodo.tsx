import { Text } from "@/modules/display/blocks";
import { Delete } from "@/modules/display/buttons";
import { Theme } from "@/modules/display/wrapper/ThemeProvider";
import { TODO_TABLE } from "@/modules/to-dos/consts";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import {
  useDelRowCallback,
  useRow,
  useSetCellCallback,
} from "tinybase/ui-react";

const CHECKBOX_SIZE = 15;

interface Props {
  id: string;
}

export default function TodoComponent({ id }: Props) {
  const task = useRow(TODO_TABLE, id);
  const isCompleted = !!task.isCompleted;

  const handleDelete = useDelRowCallback(TODO_TABLE, id);

  const handleUpdateTaskCompleted = useSetCellCallback(
    TODO_TABLE,
    id,
    "isCompleted",
    (e: boolean) => e
  );

  return (
    <View style={styles.wrapper}>
      <Checkbox
        style={styles.checkbox}
        color={Theme.primary}
        value={isCompleted}
        onValueChange={handleUpdateTaskCompleted}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Link href={`/to-dos/${id}`} style={styles.goToTask}>
          <Text>{task.title}</Text>
        </Link>
        <Delete handleDelete={handleDelete} ariaLabel="Delete task" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goToTask: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    marginRight: 10,
    borderColor: Theme.primary,
    borderRadius: 0,
    borderWidth: 1.5,
    height: CHECKBOX_SIZE,
    width: CHECKBOX_SIZE,
  },
  wrapper: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.primaryTranslucent,
  },
});
