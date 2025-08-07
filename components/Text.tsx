import useTheme from "@/hooks/useTheme";
import { PropsWithChildren } from "react";
import { Text as RNText, TextProps } from "react-native";

export default function Text({
  children,
  className,
  style,
  ...rest
}: PropsWithChildren<TextProps>) {
  const { fontFamily } = useTheme();
  return (
    <RNText {...rest} style={{ ...style, fontFamily, fontSize: 16 }}>
      {children}
    </RNText>
  );
}
