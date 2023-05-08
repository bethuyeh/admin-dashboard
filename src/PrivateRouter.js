import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Parse from 'parse';

const PrivateRouter = () => {

    if (Parse.User.current() !== null) {
      const isAuthenticated = Parse.User.current().getSessionToken();
      return isAuthenticated ? <Outlet /> : null; // or loading indicator, etc...
      }
      return <Navigate to={"/login"} replace />;
  
    }

export default PrivateRouter;
