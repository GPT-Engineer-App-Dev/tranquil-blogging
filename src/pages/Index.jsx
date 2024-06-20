import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm a passionate writer and this is my personal blog where I share my thoughts, experiences, and stories. Stay tuned for more updates!
        </Text>
        <Box>
          <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;