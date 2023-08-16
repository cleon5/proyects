"use client";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../styles.css";

const Page = () => {

  const [IsLogin, setIsLogin] = useState(true);

  const changeLogin = () => {
    setIsLogin(!IsLogin);
  };


  return (
    <div>
      {IsLogin ? (
        <Login ChangeLogin={changeLogin} />
      ) : (
        <Register ChangeLogin={changeLogin} />
      )}
    </div>
  );
};

export default Page;
