"use client";
import { useState } from "react";
import {
  TextInput,
  NumberInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Flex,
} from "@mantine/core";

export default function AddProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <Container size={5000} my={40}>
      <Title ta="center" className="font-900">
        Add products to sell today!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
        //   onSubmit={(e) => {
        //     e.preventDefault();
        //     fetch("http://localhost:5000/api/v1/customer/profile/update", {
        //       method: "POST",
        //       headers: {
        //         Authorization: `Bearer ${loginState.accessToken}`,
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         name: newName,
        //         password: newPassword,
        //         phoneNumber,
        //       }),
        //     })
        //       .then((res) => res.json())
        //       .then((data) => {
        //         console.log(data);
        //         setProfile(data.user);
        //       });
        //   }}
        >
          {/* <Image /> */}
          <Flex gap={10}>
            <TextInput
              label="Product"
              placeholder="Add your product name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

          </Flex>
            <TextInput
              label="Description"
              placeholder="Add some description"
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

          <Flex gap={10}>
            <TextInput
              label="Old Price"
              placeholder="Add Old Price"
              // required
              value={price}
              onChange={(e: any) => {
                setPrice(e.target.value);
              }}
              mt="md"
            />

            <TextInput
              label="New Price"
              placeholder="Add New Price"
              // required
              value={price}
              onChange={(e: any) => {
                setPrice(e.target.value);
              }}
              mt="md"
            />
          </Flex>

          <Button fullWidth mt="xl" className="bg-sky-600" type="submit">
            Add Product
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
