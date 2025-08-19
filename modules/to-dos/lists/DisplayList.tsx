import { Text } from "@/components";
import { Theme } from "@/components/ThemeProvider";
import { Link } from "expo-router";
import { useRow } from "tinybase/ui-react";
import { LISTS_TABLE } from "../consts";

interface Props {
  id: string;
}

export default function DisplayList({ id }: Props) {
  const { title } = useRow(LISTS_TABLE, id);
  return (
    <Link
      style={{
        borderWidth: 2,
        borderColor: Theme.primary,
        padding: 10,
        borderRadius: Theme.borderRadius,
        marginBottom: 10,
      }}
      href={`/to-dos/${id}`}
    >
      <Text>{title}</Text>
    </Link>
  );
}
