import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences with the world.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link href="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%" bg={colorMode === "light" ? "white" : "gray.700"}>
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            <Button colorScheme="red" mt={4} onClick={() => handleDelete(index)}>Delete</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;