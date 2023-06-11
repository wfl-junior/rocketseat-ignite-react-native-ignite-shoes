import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useTheme } from "native-base";
import { useEffect, useState } from "react";
import OneSignal, { OSNotification } from "react-native-onesignal";
import { Notification } from "~/components/Notification";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();
  const [notification, setNotification] = useState<OSNotification | null>(null);

  useEffect(() => {
    OneSignal.setNotificationWillShowInForegroundHandler(event => {
      setNotification(event.getNotification());
    });
  }, []);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />

      {notification?.title ? (
        <Notification
          title={notification.title}
          onClose={() => setNotification(null)}
        />
      ) : null}
    </NavigationContainer>
  );
}
