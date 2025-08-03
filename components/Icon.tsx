import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Theme } from "./ThemeProvider";

export function Icon({
  color = Theme.primary,
  size = 24,
  ...rest
}: ComponentProps<typeof Ionicons>) {
  return <Ionicons {...rest} size={size} color={color} />;
}
