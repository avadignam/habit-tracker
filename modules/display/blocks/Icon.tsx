import { Theme } from "@/modules/display/wrapper";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export default function Icon({
  color = Theme.primary,
  size = 24,
  ...rest
}: ComponentProps<typeof Ionicons>) {
  return <Ionicons {...rest} size={size} color={color} />;
}
