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

type Props = {
  title: string;
  onClose: () => void;
};

export function Notification({ title, onClose }: Props) {
  const { navigate } = useNavigation();

  function handlePress() {
    navigate("details", { productId: "7" });
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
          {title}
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
