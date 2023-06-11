import { Feather } from "@expo/vector-icons";
import { Avatar, HStack, Heading, Icon, Text, VStack } from "native-base";

export function HomeHeader() {
  return (
    <HStack pt={16} pb={5} px={8} bg="gray.600" alignItems="center">
      <Avatar
        mr={4}
        size={16}
        borderWidth={2}
        borderColor="gray.400"
        source={{ uri: "https://github.com/wfl-junior.png" }}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Wallace Júnior
        </Heading>
      </VStack>

      <Icon as={Feather} name="log-out" color="gray.200" size={7} />
    </HStack>
  );
}
