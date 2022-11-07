import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

// Material
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <Container maxWidth="sm">
      <form className="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            placeholder="Enter Username..."
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter First Name..."
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Last Name..."
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Email..."
            label="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            placeholder="Enter Password..."
            label="Password"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <p style={{ fontSize: "12px" }}>
            NOTE: Make this an uncommon password with characters, numbers, and
            special characters!
          </p>
          <Button variant="contained" type="submit">
            Register!
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default RegisterPage;
