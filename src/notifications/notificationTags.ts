import OneSignal from "react-native-onesignal";

export function createUserEmailTag(email: string) {
  OneSignal.sendTag("user_email", email);
}
