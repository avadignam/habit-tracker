import { SafeAreaView, ThemeProvider } from "@/modules/display/wrapper";
import NavButton, { NavButtonProps } from "@/modules/navigation/NavButton";
import { FlatList } from "react-native";

const NavButtons: NavButtonProps[] = [
  { title: "To Dos", href: "/to-dos" },
  { title: "Notes", href: "/notes" },
  { title: "Daily Habits", href: "/(habits)/daily-habits" },
  { title: "Weekly Habits", href: "/(habits)/weekly-habits" },
];

export default function Index() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{}}>
        <FlatList
          // TODO: if odd number of entries, last one stretches :(
          numColumns={2}
          data={NavButtons}
          renderItem={({ item }) => <NavButton {...item} />}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
