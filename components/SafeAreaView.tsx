import { PropsWithChildren } from "react";
import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import BackButton from "./BackButton";

export default function SafeAreaView({
  showBackButton = false,
  children,
  ...rest
}: PropsWithChildren<SafeAreaViewProps & { showBackButton?: boolean }>) {
  return (
    <RNSafeAreaView {...rest} style={{ margin: 20 }}>
      {showBackButton && <BackButton />}
      {children}
    </RNSafeAreaView>
  );
}
