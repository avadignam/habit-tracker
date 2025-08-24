import { ThemeProvider } from "@/modules/display/wrapper";
import { View } from "react-native";
import ColorChoice from "./ColorChoice";

export const ColorValues = {
  red: "#c85a7a",
  orange: "#c8945a",
  yellow: "#c8c45a",
  green: "#7aa85a",
  blue: "#5a7aa8",
  purple: "#7a5aa8",
};

export type Color = keyof typeof ColorValues;

interface Props {
  selectedColor: Color;
  onColorSelect: (color: Color) => void;
}

export default function ColorPicker({ onColorSelect, selectedColor }: Props) {
  return (
    <ThemeProvider>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {Object.keys(ColorValues).map((color) => {
            return (
              <ColorChoice
                key={color}
                isFocused={color === selectedColor}
                color={color as Color}
                onColorSelect={onColorSelect}
              />
            );
          })}
        </View>
      </View>
    </ThemeProvider>
  );
}
