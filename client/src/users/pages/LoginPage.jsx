import React, { useEffect, useState } from "react";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm.js";
import loginSchema from "../models/joi-schema/loginSchema";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container, Typography } from "@mui/material";
import Form from "../../forms/compnents/Form";
import Input from "../../forms/compnents/Input";
import jwtDecode from "jwt-decode";
import googleOneTap from "google-one-tap";

const options = {
  client_id:
    "943847963220-ih8q55sbetb7t258kn4k8ep32ce4crrs.apps.googleusercontent.com",
  auto_select: false,
  cancel_on_top_outside: false,
  context: "signin",
};

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useUsers();

  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );
  const navigate = useNavigate();

  if (user) return <Navigate replace to={ROUTES.SCRIPTS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        title="login"
        styles={{ maxWidth: "450px" }}
        to={ROUTES.SCRIPTS}
      >
        <Input
          lable="email"
          name="email"
          type="email"
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="password"
          lable="password"
          name="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Typography variant="h6" ml={2}>
          {" "}
          Not registered yet?{" "}
          <span
            style={{ textDecoration: "underline" }}
            onClick={() => navigate(`${ROUTES.SIGNUP}`)}
          >
            SIGN UP
          </span>
        </Typography>
      </Form>
    </Container>
  );
};

export default LoginPage;
