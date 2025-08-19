import ThemeProvider, { Theme } from "@/components/ThemeProvider";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import MainNavTab, { Icons } from "./MainNavTab";

export default function MainNavigation({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const routes = state.routes.slice(0, -2);
  const buttonWidth = dimensions.width / routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: tabPositionX.value - 5 }] };
  });

  return (
    <ThemeProvider>
      <View onLayout={onTabbarLayout} style={styles.wrapper}>
        <Animated.View
          style={[
            {
              position: "absolute",
              backgroundColor: Theme.primaryTranslucent,
              borderRadius: Theme.borderRadius,
              marginHorizontal: 12,
              height: dimensions.height - 15,
              width: buttonWidth - 12,
            },
            animatedStyle,
          ]}
        />
        {routes.map((route, index) => {
          const {
            options: { title, tabBarAccessibilityLabel, tabBarButtonTestID },
          } = descriptors[route.key];
          const label = title !== undefined ? title : route.name;
          const isFocused = state.index === index;

          function onTabPress() {
            tabPositionX.value = withSpring(buttonWidth * index);
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }

          return (
            <MainNavTab
              key={route.name}
              navigation={navigation}
              accessibilityLabel={tabBarAccessibilityLabel}
              testID={tabBarButtonTestID}
              label={label as keyof typeof Icons}
              route={route}
              onPress={onTabPress}
              isFocused={isFocused}
            />
          );
        })}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    bottom: 30,
    padding: 3,
    marginHorizontal: 50,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});
