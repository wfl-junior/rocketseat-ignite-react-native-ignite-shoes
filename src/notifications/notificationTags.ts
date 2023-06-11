import OneSignal from "react-native-onesignal";

export function createUserEmailTag(email: string) {
  OneSignal.sendTag("user_email", email);
}

export function deleteUserEmailTag() {
  OneSignal.deleteTag("user_email");
}

export function createUserInfoTags() {
  OneSignal.sendTags({
    user_name: "Wallace",
    user_email: "wallace@test.com",
  });
}
