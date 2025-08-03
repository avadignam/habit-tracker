import { Pressable, StyleSheet, View } from "react-native";
import { Icon } from "./Icon";
import Text from "./Text";
import { Theme } from "./ThemeProvider";

interface Props {
  text: string;
}

export function Todo({ text }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.trashAndTodo}>
        <Pressable style={styles.trash} aria-label="Delete task">
          <Icon name="trash" size={16} />
        </Pressable>
        <Text>{text}</Text>
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
