// Complete the Index page component here
// Use chakra-ui
import { Button, Box, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [buttonColor, setButtonColor] = useState("red");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setButtonColor("green");
        setStartTime(new Date().getTime());
      },
      Math.floor(Math.random() * 5000) + 2000,
    ); // Random time between 2 and 7 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (buttonColor === "green") {
      setEndTime(new Date().getTime());
    }
  };

  useEffect(() => {
    if (startTime && endTime) {
      const reactionTime = endTime - startTime;
      toast({
        title: "Reaction Time",
        description: `Your reaction time is ${reactionTime} milliseconds`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setButtonColor("red"); // Reset
      setStartTime(null);
      setEndTime(null);
    }
  }, [endTime, startTime, toast]);

  return (
    <Box textAlign="center" mt="20">
      <Text fontSize="xl" mb="4">
        Click the button when it turns green to test your reaction time!
      </Text>
      <Button size="lg" colorScheme={buttonColor === "green" ? "green" : "red"} onClick={handleClick} isDisabled={buttonColor !== "green"}>
        {buttonColor === "green" ? "Click me!" : "Wait for it..."}
      </Button>
    </Box>
  );
};

export default Index;
