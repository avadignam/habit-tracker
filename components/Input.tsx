import useTheme from "@/hooks/useTheme";
import { TextInput, TextInputProps } from "react-native";

export default function Input(props: TextInputProps) {
  const { borderRadius, primary } = useTheme();
  return (
    <TextInput
      {...props}
      style={{
        height: 50,
        borderRadius,
        borderColor: primary,
        borderWidth: 1.5,
        paddingHorizontal: 8,
      }}
    />
  );
}
