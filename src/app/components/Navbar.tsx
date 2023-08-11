
import Link from "next/link";
import React, {useState} from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Navbar = () => {
  const UserData:any = useAppSelector((state) => state.UserSlice);
  console.log(UserData)

//style={{height:"60px"}} 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Perfil">
                  Perfil
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/Perfil">
                  {"a"}
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
