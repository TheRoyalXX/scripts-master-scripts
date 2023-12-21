import React from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { Box, Container, Typography } from "@mui/material";
import Form from "../forms/compnents/Form";
import Input from "../forms/compnents/Input";

import useForm from "../forms/hooks/useForm";
import initialScriptForm from "../cards/helpers/initialScriptForm";
import createScriptSchema from "../cards/models/joiSchema";
import useCards from "../cards/hooks/useCards";
import SelectOption from "../forms/compnents/SelectOption";

const CreateScriptPage = () => {
  const { user } = useUser();
  const { handleCreateCard } = useCards();
  const { value, ...rest } = useForm(
    initialScriptForm,
    createScriptSchema,
    handleCreateCard
  );

  if (!user) return <Navigate replace to={ROUTES.SCRIPTS} />;
  const categoryOptions = ["JAVASCRIPT", "HTML", "PHP", "CSS", "PYHTON", "C++", "C#", "Assembly"];
  const difficultyOptions = ["Easy", "Medium", "Hard", "Expert", "Insane"];
  return (
    <Container>
      <Box sx={{ mt: -2 }}>
        <Form
          onChange={rest.validateForm}
          onReset={rest.handleReset}
          onSubmit={rest.onSubmit}
          errors={value.errors}
          to={ROUTES.MY_SCRIPTS}
        >
          {" "}
          <Typography sx={{ ml: 1 }}> ADD NEW SCRIPT</Typography>
          <Input
            data={value.data}
            lable="Title"
            name="title"
            placeholder={"eg. Cards-App - JavaScript & NodeJS using React"}
            onChange={rest.handleChange}
            required={true}
            type="text"
          />
          <SelectOption
            data={value.data}
            options={categoryOptions}
            name={"category"}
            lable={"Category"}
            onChange={rest.handleChange}
            required={true}
          />
            <SelectOption
            data={value.data}
            options={difficultyOptions}
            name={"difficulty"}
            lable={"Difficulty"}
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            data={value.data}
            lable="Languages skill requierd:"
            name="language"
            placeholder={"e.g : JavaScript / HTML / CSS / C++ / C# / Pyhton / PHP etc.."}
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            data={value.data}
            lable="Developer"
            name="developer"
            placeholder={"Developer Name or Company developed"}
            onChange={rest.handleChange}
            required={true}
          />
          <Input
            lable="Code Source"
            required={true}
            data={value.data}
            placeholder={
              "<H1>Here you need to send the full code you want to save in the database</H1>"
            }
            name="code"
            onChange={rest.handleChange}
          />
          <Input
            lable="Full Script Link Source"
            required={false}
            data={value.data}
            name="fullScriptLink"
            onChange={rest.handleChange}
          />
        </Form>
      </Box>
    </Container>
  );
};

export default CreateScriptPage;
