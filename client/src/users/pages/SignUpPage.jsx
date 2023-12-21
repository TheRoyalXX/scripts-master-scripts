import { Container, Typography } from "@mui/material";
import React from "react";
import Form from "../../forms/compnents/Form";
import Input from "../../forms/compnents/Input";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import initialSignUpForm from "../helpers/initialForms/initialSignUpForm";
import signupSchema from "../models/joi-schema/signupSchema";
import "react-phone-number-input/style.css";
import ReactPhone from "../helpers/reactPhone/ReactPhone";
import ImageUpload from "../helpers/ImageUpload";
import { useUser } from "../providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { handleSignUp } = useUsers();
  const { value, ...rest } = useForm(
    initialSignUpForm,
    signupSchema,
    handleSignUp
  );
  const navigate = useNavigate();

  const { user } = useUser();
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
        title="signup"
        styles={{ maxWidth: "450px" }}
        to={ROUTES.SCRIPTS}
      >
        <Input
          type="text"
          lable="first name"
          name="firstName"
          error={value.errors.firstName}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="text"
          lable="last name"
          name="lastName"
          error={value.errors.lastName}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          data={value.data}
          error={value.errors.email}
          onChange={rest.handleChange}
          type="email"
          required={true}
          lable="email"
          name="email"
        />
        <Input
          type="password"
          lable="password"
          name="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="phone"
          lable="phone"
          name="phone"
          error={value.errors.phone}
          onChange={rest.handleChange}
          data={value.data}
        />
        <Input
          type="text"
          lable="imageUrl"
          name="imageUrl"
          placeholder={
            "https://cdn.pixabay.com/photo/2023/05/01/06/55/waterfall-7962263_640.jpg"
          }
          error={value.errors.imageUrl}
          onChange={rest.handleChange}
          data={value.data}
        />{" "}
        <Typography variant="h6" ml={2}>
          {" "}
          Already signed up?{" "}
          <span
            style={{ textDecoration: "underline" }}
            onClick={() => navigate(`${ROUTES.LOGIN}`)}
          >
            Login
          </span>
        </Typography>
      </Form>
    </Container>
  );
};

export default SignUpPage;
