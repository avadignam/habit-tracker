import { Text } from "@/components";
import { Pressable, PressableProps } from "react-native";
import { Theme } from "./ThemeProvider";

interface Props extends PressableProps {
  text: string;
  disabled?: boolean;
}

export default function Button({ text, disabled, ...rest }: Props) {
  return (
    <Pressable
      style={{
        backgroundColor: disabled ? "grey" : Theme.primary,
        padding: 10,
        borderRadius: Theme.borderRadius,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
      }}
      disabled={disabled}
      {...rest}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{text}</Text>
    </Pressable>
  );
}
