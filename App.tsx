import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import OneSignal from "react-native-onesignal";
import { Loading } from "~/components/Loading";
import { CartContextProvider } from "~/contexts/CartContext";
import { Routes } from "~/routes";
import { THEME } from "~/theme";

OneSignal.setAppId(process.env.ONE_SIGNAL_APP_ID);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
