import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Auth from "./auth/auth";
import ProtectedRoute from "./utils/protectedRoute";
import Home from "./components/home";
import useToken from './auth/useToken';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<App />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/home" element={<App />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
