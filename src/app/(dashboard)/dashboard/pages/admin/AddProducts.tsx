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
import { useSelector } from "react-redux";

export default function AddProducts() {
  const loginState = useSelector((state: any) => {
    return state.login;
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addShoe = (event: React.FormEvent) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/v1/product/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginState.accessToken}`,
      },
      body: JSON.stringify({ name, description, oldPrice, newPrice, imageUrl }),
    })
      .then((res) => {
        if (!res.ok) alert("Error Adding Shoe");
        return res.json();
      })
      .then((data: { status: number; message: string }) => {
        alert(data.message);
        setName("");
        setDescription("");
        setOldPrice("");
        setNewPrice("");
        setImageUrl("");
      });
  };
  return (
    <Container size={5000} my={40}>
      <Title ta="center" className="font-900">
        Add products to sell today!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={addShoe}>
          <TextInput
            label="Shoe Name"
            placeholder="Add your shoe name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextInput
            label="Description"
            placeholder="Add shoe description"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <TextInput
            label="Shoe Image"
            placeholder="Add shoe image url"
            required
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />

          <Flex gap={10}>
            <TextInput
              label="Old Price"
              placeholder="Add Old Price"
              required
              value={oldPrice}
              onChange={(e: any) => {
                setOldPrice(e.target.value);
              }}
              mt="md"
            />

            <TextInput
              label="New Price"
              placeholder="Add New Price"
              required
              value={newPrice}
              onChange={(e: any) => {
                setNewPrice(e.target.value);
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
