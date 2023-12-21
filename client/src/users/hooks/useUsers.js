import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import {
  editUser,
  getUserFromServer,
  getUsers,
  login,
  signup,
} from "../services/usersApiService";
import {
  getUser,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";
import normlizeUser from "../helpers/normlizeUser";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();
  useAxios();
  const requestStatus = useCallback(
    (loading, errorMessage, users, user = null) => {
      setLoading(loading);
      setError(errorMessage);
      setUsers(users);
      setUser(user);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async (user) => {
      try {
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, null, userFromLocalStorage);
        navigate(ROUTES.SCRIPTS);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus]
  );
  const handleSignUp = useCallback(
    async (user) => {
      try {
        const normlizedUser = normlizeUser(user);

        await signup(normlizedUser);
        await handleLogin({ email: user.email, password: user.password });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleGetUser = async () => {
    try {
      setLoading(true);
      const userFromLocalStorage = await getUser();
      const userId = userFromLocalStorage._id;
      const user = await getUserFromServer(userId);
      requestStatus(false, null, null, user);
      return user;
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetUsers = useCallback(async () => {
    try {
      const users = await getUsers();
      requestStatus(false, null, users);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateUser = useCallback(async (userId, userFromClient) => {
    try {
      setLoading(true);
      const user = await editUser(userId, userFromClient);
      requestStatus(false, null, null, user);
      navigate(ROUTES.ROOT);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  return {
    setLoading,
    isLoading,
    error,
    user,
    users,
    handleLogin,
    handleGetUser,
    handleSignUp,
    handleUpdateUser,
    handleGetUsers,
  };
};

export default useUsers;
