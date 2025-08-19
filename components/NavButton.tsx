import { Link, LinkProps } from "expo-router";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { Theme } from "./ThemeProvider";

export interface NavButtonProps {
  title: string;
  href: LinkProps["href"];
}

export default function NavButton({ title, href }: NavButtonProps) {
  return (
    <Link
      href={href}
      style={{
        borderRadius: Theme.borderRadius,
        backgroundColor: Theme.primaryTranslucent,
        aspectRatio: 1,
        flex: 1,
        margin: 5,
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.wrapper}>
        <Text>{title}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});
