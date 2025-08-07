import { Link, LinkProps } from "expo-router";
import { StyleSheet } from "react-native";
import Text from "./Text";
import { Theme } from "./ThemeProvider";

export interface NavButtonProps {
  title: string;
  href: LinkProps["href"];
}

export default function NavButton({ title, href }: NavButtonProps) {
  return (
    <Link href={href} style={styles.wrapper}>
      <Text>{title}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: Theme.primary,
    borderWidth: 2,
    borderRadius: Theme.borderRadius,
    backgroundColor: Theme.primaryTranslucent,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },
});
