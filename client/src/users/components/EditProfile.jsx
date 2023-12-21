import React, { useEffect } from "react";
import Form from "../../forms/compnents/Form";
import Input from "../../forms/compnents/Input";
import useForm from "../../forms/hooks/useForm";
import initialEditProfileForm from "../helpers/initialForms/initialEditProfileForm";
import editProfileSchema from "../models/joi-schema/editProfileSchema";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import { useParams } from "react-router-dom";
import normlizeUser from "../helpers/normlizeUser";
import mapToUserModel from "../helpers/mapToUserModel";
import ROUTES from "../../routes/routesModel";

const EditProfile = () => {
  const { handleUpdateUser, handleGetUser } = useUsers();
  const { user } = useUser();
  const { userId } = useParams();
  const { value, ...rest } = useForm(
    initialEditProfileForm,
    editProfileSchema,
    () =>
      handleUpdateUser(user._id, {
        ...normlizeUser({ ...value.data }),
        user_id: user._id,
      })
  );

  useEffect(() => {
    handleGetUser(userId).then((data) => {
      const modeledUser = mapToUserModel(data);
      rest.setData(modeledUser);
    });
  }, []);

  return (
    <>
      {user && (
        <Form
          to={ROUTES.PROFILE}
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          title="edit user details"
          styles={{ maxWidth: "450px" }}
          errors={value.errors}
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
            error={value.errors.imageUrl}
            onChange={rest.handleChange}
            data={value.data}
          />
        </Form>
      )}
    </>
  );
};

export default EditProfile;
