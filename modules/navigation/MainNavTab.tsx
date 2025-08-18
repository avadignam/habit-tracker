import { Icon } from "@/components";
import { Theme } from "@/components/ThemeProvider";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import {
  NavigationHelpers,
  NavigationRoute,
  ParamListBase,
  useLinkBuilder,
} from "@react-navigation/native";
import { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export const Icons = {
  Home: (props: any) => <Icon name="home" {...props} />,
  Habits: (props: any) => <Icon name="alarm" {...props} />,
  "To Do": (props: any) => <Icon name="checkmark-done" {...props} />,
  Notes: (props: any) => <Icon name="pencil" {...props} />,
};

interface Props {
  label: keyof typeof Icons;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  route: NavigationRoute<ParamListBase, string>;
  accessibilityLabel?: string;
  testID?: string;
  isFocused: boolean;
  onPress: () => void;
}

export default function MainNavTab({
  label,
  navigation,
  route,
  isFocused,
  accessibilityLabel,
  testID,
  onPress,
}: Props) {
  const { buildHref } = useLinkBuilder();
  const { key, name, params } = route;
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 300 });
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return { opacity };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 10]);
    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: key,
    });
  };

  return (
    <PlatformPressable
      href={buildHref(name, params)}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        // borderColor: "green",
        // borderWidth: 2,
      }}
    >
      <Animated.View style={animatedIconStyle}>
        {Icons[label](isFocused ? Theme.primary : "black")}
      </Animated.View>
      <Animated.Text
        style={[
          {
            textAlign: "center",
            paddingTop: 5,
            color: Theme.primary,
            fontFamily: Theme.fontFamily,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </PlatformPressable>
  );
}
