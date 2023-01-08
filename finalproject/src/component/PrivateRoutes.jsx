//this file was created to protect from people using direct home page 

import { useContext } from "react";
import { AccountContext } from "./AccountContext";

 
const { Outlet, Navigate } = require("react-router");

const useAuth = () => {
    const { user } = useContext(AccountContext);
    return user && user.loggedIn; 
};

const PrivateRoutes = () =>{
    const isAuth = useAuth();
    return isAuth  ?  <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes; 