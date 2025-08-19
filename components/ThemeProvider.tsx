import { createContext, ReactNode } from "react";
import { Platform } from "react-native";

interface ThemeContextState {
  fontFamily?: string;
  primary: string;
  primaryTranslucent: string;
  borderRadius: number;
  screenMargin: number;
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
  screenMargin: 20,
};

export default function ThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
}
