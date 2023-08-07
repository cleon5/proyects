"use client";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../styles.css";
import Navbar from "../components/Navbar";

const Page = () => {
  const [IsLogin, setIsLogin] = useState(false);

  const changeLogin = () => {
    setIsLogin(!IsLogin);
  };

  return (
    <div>
      <Navbar />
      {IsLogin ? (
        <Login ChangeLogin={changeLogin} />
      ) : (
        <Register ChangeLogin={changeLogin} />
      )}
    </div>
  );
};

export default Page;
