import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8} bg={useColorModeValue("gray.50", "gray.800")}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm a passionate writer and this is my personal blog where I share my thoughts, experiences, and stories. Stay tuned for more updates!
        </Text>
        <Box>
          <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        </Box>
        <Button as={Link} href="/add-post" colorScheme="teal" size="md">Add New Post</Button>
        <VStack spacing={4} w="100%">
          {posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Heading as="h3" size="md">{post.title}</Heading>
              <Text fontSize="sm" color="gray.500">{post.date}</Text>
              <Text mt={2}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;