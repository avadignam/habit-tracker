import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import ThemeProvider from "./ThemeProvider";

export const ColorValues = {
  red: "#e6194B",
  orange: "#f58231",
  yellow: "#ffe119",
  green: "#3cb44b",
  blue: "#4363d8",
  purple: "#911eb4",
};

export type Color = keyof typeof ColorValues;

const SIZE = 30;
const SELECTED_SIZE = SIZE + 4;

interface Props {
  selectedColor: Color;
  onColorSelect: (color: Color) => void;
}

export default function ColorChoice({ onColorSelect, selectedColor }: Props) {
  const [circlePositions, setCirclePositions] = useState<Record<Color, number>>(
    {} as any
  );

  const selectedColorX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: selectedColorX.value }] };
  });

  return (
    <ThemeProvider>
      <View>
        <Animated.View style={[styles.selectedColor, animatedStyle]} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {Object.entries(ColorValues).map(([color, value]) => {
            return (
              <Pressable
                key={color}
                style={{
                  backgroundColor: value,
                  height: SIZE,
                  width: SIZE,
                  borderRadius: 100,
                }}
                onLayout={(e) => {
                  const { x } = e.nativeEvent.layout;
                  setCirclePositions((prev) => ({ ...prev, [color]: x }));
                }}
                onPress={() => {
                  onColorSelect(color as Color);
                  const x = circlePositions[color as Color] ?? 0;
                  selectedColorX.value = withSpring(x, {
                    duration: 600,
                  });
                }}
              />
            );
          })}
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  selectedColor: {
    height: SELECTED_SIZE,
    width: SELECTED_SIZE,
    top: -2,
    left: -2,
    borderRadius: 100,
    backgroundColor: "black",
    position: "absolute",
  },
});
