import { createContext, ReactNode } from "react";
import { Platform, SafeAreaView } from "react-native";

interface ThemeContextState {
  fontFamily?: string;
  primary: string;
  primaryTranslucent: string;
  borderRadius: number;
}

export const ThemeContext = createContext<ThemeContextState | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const Theme: ThemeContextState = {
  fontFamily: Platform.select({
    ios: "Menlo",
    android: "monospace",
    web: "monospace",
  }),
  primary: "#647744",
  primaryTranslucent: "rgba(100, 119, 68, 0.12)",
  borderRadius: 16,
};
export default function ThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={Theme}>
      <SafeAreaView
        style={{
          height: "100%",
          margin: 20,
        }}
      >
        {children}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
