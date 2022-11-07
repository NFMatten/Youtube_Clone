import React, { useContext, useEffect } from "react";
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container maxWidth="xs">
      <form className="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
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
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}
          {/* <Link to="/register">Click to register!</Link> */}
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
