import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./LoginPage.css";

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

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs">
      <form className="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <h2>Sign in to YouTube Clone</h2>
          <TextField
            label="Username"
            placeholder="Enter Username..."
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <TextField
            label="Password"
            placeholder="Enter Password..."
            type={showPassword ? "test" : "password"}
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

          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}

          <Button href="/register">Click to register!</Button>
          <Button variant="contained" type="submit">
            Login!
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default LoginPage;
