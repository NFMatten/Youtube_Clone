import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

// Material
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
          <h2>Register with YouTube Clone</h2>
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
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={toggleShowPassword} />}
              label="Show Password"
            />
          </FormGroup>

          <p style={{ fontSize: "12px" }}>
            NOTE: Make this an uncommon password with characters, numbers, and
            special characters!
          </p>
          <Button variant="contained" type="submit">
            Register!
          </Button>
          <Button href="/login">Already Registered? Login</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default RegisterPage;
