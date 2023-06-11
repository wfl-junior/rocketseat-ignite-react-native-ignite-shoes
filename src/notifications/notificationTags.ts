import OneSignal from "react-native-onesignal";

export function createUserEmailTag(email: string) {
  OneSignal.sendTag("user_email", email);
}

export function deleteUserEmailTag() {
  OneSignal.deleteTag("user_email");
}
