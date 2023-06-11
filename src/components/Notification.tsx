import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  CloseIcon,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Text,
} from "native-base";
import { OSNotification } from "react-native-onesignal";

interface AdditionalData {
  route?: string;
  product_id?: string;
}

interface NotificationProps {
  onClose: () => void;
  notification: OSNotification;
}

export function Notification({ notification, onClose }: NotificationProps) {
  const { navigate } = useNavigation();

  function handlePress() {
    const { route, product_id } = (notification.additionalData ??
      {}) as AdditionalData;

    if (route === "details" && product_id) {
      navigate(route, { productId: product_id });
    }

    onClose();
  }

  return (
    <Pressable
      p={4}
      pt={12}
      top={0}
      w="full"
      bgColor="gray.200"
      position="absolute"
      onPress={handlePress}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Icon
          mr={2}
          size={5}
          color="black"
          as={Ionicons}
          name="notifications-outline"
        />

        <Text fontSize="md" color="black" flex={1}>
          {notification.title}
        </Text>

        <IconButton
          color="black"
          onPress={onClose}
          variant="unstyled"
          _focus={{ borderWidth: 0 }}
          icon={<CloseIcon size="3" />}
          _icon={{ color: "coolGray.600" }}
        />
      </HStack>
    </Pressable>
  );
}
