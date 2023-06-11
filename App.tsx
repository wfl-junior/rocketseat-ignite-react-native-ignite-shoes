import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import OneSignal, { OSNotification } from "react-native-onesignal";
import { Loading } from "~/components/Loading";
import { Notification } from "~/components/Notification";
import { CartContextProvider } from "~/contexts/CartContext";
import { Routes } from "~/routes";
import { THEME } from "~/theme";

OneSignal.setAppId(process.env.ONE_SIGNAL_APP_ID);

export default function App() {
  const [notification, setNotification] = useState<OSNotification | null>(null);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    OneSignal.setNotificationWillShowInForegroundHandler(event => {
      setNotification(event.getNotification());
    });
  }, []);

  useEffect(() => {}, []);

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

      {notification?.title && (
        <Notification
          title={notification.title}
          onClose={() => setNotification(null)}
        />
      )}
    </NativeBaseProvider>
  );
}
