import { Text } from "@/modules/display/blocks";
import { Theme } from "@/modules/display/wrapper";
import { shadow } from "@/styles";
import { Pressable, PressableProps } from "react-native";

interface Props extends PressableProps {
  text: string;
  disabled?: boolean;
}

export default function Button({ text, disabled, ...rest }: Props) {
  return (
    <Pressable
      style={[
        {
          backgroundColor: disabled ? "grey" : Theme.primary,
          padding: 10,
          borderRadius: Theme.borderRadius,
        },
        !disabled && { ...shadow.regular },
      ]}
      disabled={disabled}
      {...rest}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{text}</Text>
    </Pressable>
  );
}
