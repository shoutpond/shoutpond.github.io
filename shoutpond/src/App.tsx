import { Box, ChakraProvider, VStack } from "@chakra-ui/react";

import Header from "./components/Header";
import JoinUs from "./components/JoinUs";
import ContactUs from "./components/ContactUs";

import "./App.css";
import { useRef } from "react";

function App() {
  const style = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  } as any;

  const headRef: any = useRef();
  const joinUsRef: any = useRef();
  const contactUsRef: any = useRef();

  const scrollToHeadUs = () => {
    headRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJoinUs = () => {
    joinUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChakraProvider>
      <VStack className="shoutpond" align="stretch">
        <Box style={style} ref={headRef}>
          <Header
            onScrollToJoinUs={() => scrollToJoinUs()}
            onScrollToContactUs={() => scrollToContactUs()}
          />
        </Box>
        <Box style={style} ref={joinUsRef}>
          <JoinUs onScrollToContactUs={() => scrollToContactUs()} />
        </Box>
        <Box style={style} ref={contactUsRef}>
          <ContactUs scrollToHeadUs={() => scrollToHeadUs()} />
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
