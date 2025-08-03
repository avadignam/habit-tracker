import { TODO_TABLE } from "@/app/(to-dos)/consts";
import { Pressable, StyleSheet, View } from "react-native";
import { useRow } from "tinybase/ui-react";
import { Icon } from "./Icon";
import Text from "./Text";
import { Theme } from "./ThemeProvider";

interface Props {
  id: string;
}

export default function TodoComponent({ id }: Props) {
  const { title } = useRow(TODO_TABLE, id);
  return (
    <View style={styles.wrapper}>
      <View style={styles.trashAndTodo}>
        <Pressable style={styles.trash} aria-label="Delete task">
          <Icon name="trash" size={16} />
        </Pressable>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  trash: {
    marginRight: 10,
  },
  trashAndTodo: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    borderRadius: Theme.borderRadius,
    borderColor: Theme.primary,
    borderStyle: "solid",
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: Theme.primaryTranslucent,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
