import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useToast, useColorModeValue } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, date: new Date().toLocaleDateString() };

    // Save the post to localStorage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    toast({
      title: "Post added.",
      description: "Your new blog post has been added.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear the form
    setTitle("");
    setContent("");
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={useColorModeValue("gray.50", "gray.800")}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Button type="submit" colorScheme="teal" size="md">Add Post</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;