import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MainDashboard from "pages/MainDashboard";
import Accounts from "pages/Accounts";
import Investments from "pages/Investments";
import Loan from "pages/Loan";
import SettingEditProfile from "pages/SettingEditProfile";
import SignUpPage from "pages/SignUp/Page";
import Login from "pages/SignIn/Page";
import TransactionForm from "pages/TransactionForm/Page";
import EditProfilePage from "pages/SettingEditProfile/Page";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <MainDashboard />,
    },
    {
      path: "accounts",
      element: <Accounts />,
    },
    {
      path: "investments",
      element: <Investments />,
    },
    {
      path: "loan",
      element: <Loan />,
    },
    {
      path: "profile",
      element: <SettingEditProfile />,
    },
    {
      path: "signup",
      element: <SignUpPage />,
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "transactionform",
      element: <TransactionForm/>,
    },
    {
      path: "editprofile",
      element: <EditProfilePage/>,
    },   
  ]);

  return element;
};

export default ProjectRoutes;
