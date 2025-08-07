import { Icon, Text } from "@/components";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Theme } from "./ThemeProvider";

export default function BackButton() {
  const { back } = useRouter();
  return (
    <Pressable hitSlop={20} onPress={() => back()} style={styles.wrapper}>
      <Icon style={styles.icon} name="chevron-back" />
      <Text style={{ color: Theme.primary }}>Back</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  icon: {
    paddingRight: 5,
  },
});
