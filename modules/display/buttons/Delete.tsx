import { Icon } from "@/modules/display/blocks";
import { Pressable } from "react-native";

interface Props {
  ariaLabel: string;
  handleDelete: () => void;
}

export default function Delete({ ariaLabel, handleDelete }: Props) {
  return (
    <Pressable onPress={() => handleDelete()} aria-label={ariaLabel}>
      <Icon name="trash" size={16} />
    </Pressable>
  );
}
