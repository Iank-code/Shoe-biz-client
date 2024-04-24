"use client";
import { useEffect, useState } from "react";

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
import { useRouter } from "next/navigation";

export default function Setting() {
  const router = useRouter();
  const loginState = useSelector((state: any) => state.login);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/customer/profile", {
      headers: {
        Authorization: `Bearer ${loginState.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "Token has expired. Login to proceed") {
          alert(data);
          router.push("/");
          // window.location.reload();
        }
        setProfile(data.user);
      });
  }, []);

  return (
    <Container size={420} my={40}>
      <Title ta="center" className="font-900">
        Update your credentials here!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:5000/api/v1/customer/profile/update", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${loginState.accessToken}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: newName,
                password: newPassword,
                phoneNumber,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                setProfile(data.user);
              });
          }}
        >
          {/* <Image /> */}
          <Flex gap={10}>
            <TextInput
              label="Name"
              placeholder="Update Your Name"
              required
              value={
                profile && profile.name === ""
                  ? newName
                  : profile && profile.name
              }
              onChange={(e) => {
                setProfile(" ");
                setNewName(e.target.value);
              }}
            />

            <TextInput
              label="Email"
              placeholder="Update Your Email"
              required
              value={profile && profile.email}
            />
          </Flex>

          <TextInput
            label="Phone Number"
            placeholder="Update Your Phone Number"
            // required
            value={
              profile && profile.phoneNumber === null
                ? phoneNumber
                : profile && profile.phoneNumber
            }
            onChange={(e: any) => {
              setPhoneNumber(e.target.value);
            }}
            mt="md"
          />

          <PasswordInput
            label="New Password"
            placeholder="Update Your password"
            // required
            onChange={(e) => setNewPassword(e.target.value)}
            mt="md"
          />

          <Button fullWidth mt="xl" className="bg-sky-600" type="submit">
            Update
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
