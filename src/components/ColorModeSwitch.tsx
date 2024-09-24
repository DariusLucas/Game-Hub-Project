import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      padding="13px"
      background={colorMode === "dark" ? "#202020" : "#ededed"}
      borderRadius={30}
      fontSize="17px"
    >
      <Switch
        size="sm"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        whiteSpace="nowrap"
        cursor="pointer"
        fontFamily="cursive"
      >
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
