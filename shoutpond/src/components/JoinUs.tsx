import { FC } from "react";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const JoinUs: FC<any> = ({ onScrollToContactUs }) => {
  return (
    <Box padding="2" maxW="1000px" textAlign="center">
      <Box
        as="h3"
        fontFamily="Pacifico"
        marginTop="10"
        fontSize="1.5em"
        textAlign="center"
      >
        Join us
      </Box>

      <Text fontSize="1em" fontWeight="400" padding="2" maxW="1000px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vulputate arcu nunc, et fringilla libero luctus at. Ut non euismod sem,
        at maximus tellus. Fusce rutrum eu odio ut eleifend. In luctus mi sit
        amet ex consectetur, a fermentum diam semper. Nulla at luctus orci.
        Vestibulum eu congue libero, eget vulputate enim. Proin ultricies
        ullamcorper mi, ac euismod ipsum. Praesent semper pharetra urna, sit
        amet fringilla ipsum sagittis sit amet. Curabitur in porta mi. Sed
        commodo a nulla ullamcorper elementum. In hac habitasse platea dictumst.
        Quisque imperdiet a felis at convallis. Aliquam ullamcorper lobortis
        porttitor. Maecenas a neque dignissim, consectetur libero mattis,
        posuere ante. Morbi faucibus in velit at hendrerit.
      </Text>

      <Box as="h3" fontFamily="Pacifico" marginY="5" fontSize="1.2em">
        Good to have!
      </Box>
      <UnorderedList textAlign="left">
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>

      <Button colorScheme="teal" size="lg" marginTop="10" onClick={onScrollToContactUs}>
        Contact us!
      </Button>
    </Box>
  );
};

export default JoinUs;
