import React from "react";
import { Outlet } from "react-router-dom";
import AuthNavbar from "../partials/authNavbar";
import useToken from "./useToken";

const Auth = () => {
    const { token, setToken } = useToken();
    return (
        <React.Fragment>
            <AuthNavbar />
            <Outlet />
        </React.Fragment>
    );
}
export default Auth;