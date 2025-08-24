import { Text } from "@/modules/display/blocks";
import { Theme } from "@/modules/display/wrapper/ThemeProvider";
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
        flexDirection: "row",
        padding: 12,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.primaryTranslucent,
      }}
      href={`/to-dos/${id}`}
    >
      <Text>{title}</Text>
    </Link>
  );
}
