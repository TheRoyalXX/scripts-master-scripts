import React from "react";
import ROUTES from "./routesModel";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../users/pages/LoginPage";
import SignUpPage from "../users/pages/SignUpPage";
import ScriptsPage from "../pages/ScriptsPage";
import FavoritesPage from "../pages/FavoritesPage";
import MyScriptsPage from "../pages/MyScriptsPage";
import CreateScriptPage from "../pages/CreateScriptPage";
import ScriptPage from "../pages/ScriptPage";
import ProfilePage from "../users/pages/ProfilePage";
import EditScriptPage from "../pages/EditScriptPage";
import ManageUsers from "../users/pages/ManageUsers";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SCRIPTS} element={<ScriptsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.MANAGE_USERS} element={<ManageUsers />} />
      <Route path={`${ROUTES.PROFILE}/:userId`} element={<ProfilePage />} />
      <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTES.MY_SCRIPTS} element={<MyScriptsPage />} />
      <Route path={`${ROUTES.SCRIPT_PAGE}/:cardId`} element={<ScriptPage />} />
      <Route path={ROUTES.CREATE_SCRIPT_PAGE} element={<CreateScriptPage />} />
      <Route
        path={`${ROUTES.EDIT_SCRIPT}/:cardId`}
        element={<EditScriptPage />}
      />
    </Routes>
  );
};

export default Router;
