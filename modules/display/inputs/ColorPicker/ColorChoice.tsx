import { useEffect } from "react";
import { Pressable } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Color, ColorValues } from ".";

const SIZE = 35;

interface Props {
  color: Color;
  isFocused: boolean;
  onColorSelect: (color: Color) => void;
}

export default function ColorChoice({
  color,
  isFocused,
  onColorSelect,
}: Props) {
  const selectedColorSize = useSharedValue(0);

  useEffect(() => {
    selectedColorSize.value = withSpring(isFocused ? 1 : 0, {
      duration: 300,
    });
  }, [selectedColorSize, isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(selectedColorSize.value, [0.5, 1], [1, 1.1]);
    return { transform: [{ scale: scaleValue }] };
  });

  return (
    <Pressable
      key={color}
      onPress={() => {
        onColorSelect(color as Color);
      }}
    >
      <Animated.View
        style={[
          {
            backgroundColor: ColorValues[color],
            height: SIZE,
            width: SIZE,
            borderRadius: 100,
          },
          animatedStyle,
        ]}
      />
    </Pressable>
  );
}
