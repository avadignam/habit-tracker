import { Icon, Text } from "@/modules/display/blocks";
import { Theme } from "@/modules/display/wrapper";
import { LinkProps, useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

interface Props {
  href?: LinkProps["href"];
  dismiss?: boolean;
}

export default function BackButton({ href, dismiss }: Props) {
  const { back, dismissTo, dismissAll } = useRouter();
  return (
    <Pressable
      hitSlop={20}
      onPress={() => {
        dismiss ? dismissAll() : href ? dismissTo(href) : back();
      }}
      style={styles.wrapper}
    >
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
