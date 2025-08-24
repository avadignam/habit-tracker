import { Back } from "@/modules/display/buttons";
import { Theme } from "@/modules/display/wrapper/ThemeProvider";
import { PropsWithChildren } from "react";
import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

export default function SafeAreaView({
  showBackButton = false,
  children,
  ...rest
}: PropsWithChildren<SafeAreaViewProps & { showBackButton?: boolean }>) {
  return (
    <RNSafeAreaView {...rest} style={{ margin: Theme.screenMargin }}>
      {showBackButton && <Back />}
      {children}
    </RNSafeAreaView>
  );
}
