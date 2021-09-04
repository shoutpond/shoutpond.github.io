import { FC } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactUs: FC<any> = ({ scrollToHeadUs }) => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    reset();
    scrollToHeadUs();
    toast({
      title: "Message sent!",
      description: "Thank you for your message, we will contact you soon.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box w="100%" maxW="900px" paddingX={{ base: 2, md: 5 }} textAlign="center">
      <Box as="h3" fontFamily="Pacifico" marginY="10" fontSize="1.5em">
        Contact us
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <VStack>
          <Input
            type="text"
            bg="white"
            w="100%"
            color="black"
            placeholder="Full name"
            isInvalid={Boolean(errors.fullName)}
            {...register("fullName", {
              required: "Please enter first name",
              minLength: 6,
              maxLength: 80,
            })}
          />
          <Input
            type="email"
            bg="white"
            color="black"
            placeholder="Email"
            isInvalid={Boolean(errors.email)}
            {...register("email", {
              required: "Please enter email",
              minLength: 6,
              maxLength: 80,
            })}
          />
          <Textarea
            bg="white"
            color="black"
            placeholder="Message"
            isInvalid={Boolean(errors.message)}
            {...register("message", {
              required: "Please enter message",
              minLength: 6,
              maxLength: 800,
            })}
          />
          <Box />
          <Button colorScheme="teal" size="lg" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactUs;
