import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../public/assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <Text>Selam</Text>
    </HStack>
  );
};

export default Navbar;
