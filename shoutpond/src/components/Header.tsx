import { FC, Fragment } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

const Header: FC<any> = ({ onScrollToJoinUs, onScrollToContactUs }) => {
  const style = {
    fontFamily: "Pacifico",
    fontWeight: 400,
    fontSize: "2.5em",
    lineHeight: "1.00em",
  };
  return (
    <Fragment>
      <Box as="h1" style={style}>
        Shoutpond
      </Box>

      <Box as="h3" fontFamily="Pacifico" marginTop="10" fontSize="1.5em">
        Coming soon!
      </Box>

      <Text fontSize="1em" fontWeight="400">
        Get ready! Something really cool is coming!
      </Text>

      <Stack spacing={4} direction="row" align="center" marginTop="10">
        <Button colorScheme="teal" size="lg" onClick={onScrollToJoinUs}>
          Join us!
        </Button>
        <Button colorScheme="teal" size="lg" onClick={onScrollToContactUs}>
          Contact us!
        </Button>
      </Stack>
    </Fragment>
  );
};

export default Header;
