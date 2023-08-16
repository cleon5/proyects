"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../Styles/Perfil.css";
import { useSelector } from "react-redux"; //
import { LocalStorageGetUser } from "@/services/localStorage";
import DatosPerfil from "./DatosPerfil";
import Proyects from "./Proyects";
import Work from "./Work";

interface UserInfo2 {
  _id: String;
  Alias: String;
  Name: String;
  Description: String;
  Image: String;
  Correo: String;
  Password: String;
  Skills: Array<String>;
  Information: { Proyects: Object[]; Experience: any[] };
  Links: { GitHub: String; Linkedin: String };
  Proyects: Array<String>;
  Experience: Array<String>;
}

const page = () => {
  const UserData: any = useSelector((state: any) => state.UserSlice);
  console.log(UserData);
  const [InfoUser, setInfoUser] = useState<UserInfo2>({
    _id: "",
    Alias: "",
    Name: "",
    Description: "",
    Image: "",
    Correo: "",
    Password: "",
    Information: {
      Proyects: [],
      Experience: [],
    },
    Proyects: [],
    Experience: [],
    Skills: [],
    Links: { GitHub: "", Linkedin: "" },
  });
  const [TmpUser, setTmpUser] = useState<UserInfo2>({
    _id: "",
    Alias: "",
    Name: "",
    Description: "",
    Image: "",
    Correo: "",
    Password: "",
    Information: {
      Proyects: [],
      Experience: [],
    },
    Proyects: [],
    Experience: [],
    Skills: [],
    Links: { GitHub: "", Linkedin: "" },
  });

  const saveUserState = async () => {
    await axios
      .put(`http://localhost:3000/api/user/${InfoUser._id}`, TmpUser)
      .then((data) => {
        console.log(data.data);
      });
  };

  const getUserAxios = async () => {
    await axios
      .get("http://localhost:3000/api/user/64d117058ff72de63c820e0e")
      .then((data) => {
        console.log(data.data);
        setInfoUser(data.data);
        setTmpUser(data.data);
      });
  };

  const changeText = (event: any) => {
    const { id, value, name } = event.target;

    const newValues = {
      ...TmpUser,
      [id]: value,
    };

    if (name) {
      console.log(name);
      const newValuesObject = {
        ...TmpUser,
        [name]: {
          ...TmpUser.Links,
          [id]: value,
        },
      };
      setTmpUser(newValuesObject);
    }
    setTmpUser(newValues);
  };
  const changeTextProyects = (event: any) => {
    const { id, value, name } = event.target;

    const newValuesObject = {
      ...TmpUser,
      [name]: {
        ...TmpUser.Proyects,
        [id]: value,
      },

      //setTmpUser(newValuesObject);
    };
  };

  const GetUser = async () => {
    if (UserData.User == null) {
      let UserTmp: any = LocalStorageGetUser();
      UserTmp ? setInfoUser(UserTmp) : getUserAxios();
    } else {
      setInfoUser(UserData.User);
    }
  };
  useEffect(() => {
    GetUser();
  }, []);

  const Data = {
    name: "cleon",
    username: "cleon4",
    descripcion:
      "descripcion rapida de los, descripcion rapida de los, descripcion rapida de los",
    image: "./images/74253.jpg",
    skills: {
      hard: ["trabajo en equipo", "trabajo en equipo"],
      soft: ["html", "css", "react", "html", "css", "react"],
    },
    proyects: [],
    icons: ["fa-brands fa-java", "fa-brands fa-square-js"],
    bange: [
      "badge rounded-pill text-bg-primary",
      "badge rounded-pill text-bg-secondary",
      "badge rounded-pill text-bg-success",
      "badge rounded-pill text-bg-danger",
      "badge rounded-pill text-bg-warning",
      "badge rounded-pill text-bg-info",
      "badge rounded-pill text-bg-light",
      "badge rounded-pill text-bg-dark",
    ],
  };

  return (
    <>
      <div className="Perfil">
        <DatosPerfil
          changeText={changeText}
          InfoUser={InfoUser}
          saveUserState={saveUserState}
        />

        <div className="Proyects">
          <div className="techStack">
            <div className="d-flex justify-content-between">
              <h3>Tech Stack</h3>
              <button
                data-bs-toggle="modal"
                data-bs-target="#modalStacks"
                className="btn btn-light"
              >
                <i className="fa-solid fa-pen-to-square fa-2xl"></i>
              </button>
            </div>

            <hr />
            {InfoUser?.Skills.length > 0 ? (
              InfoUser?.Skills?.map((skill, index) => (
                <span key={index} className={Data.bange[index] + " skillbadge"}>
                  <div className="stack">
                    <i className="fa-brands fa-square-js fa-2xl"></i> a{skill}
                  </div>
                </span>
              ))
            ) : (
              <p>Sin Skills</p>
            )}
          </div>

          <Proyects
            changeText={changeText}
            InfoUser={InfoUser}
            saveUserState={saveUserState}
          />

          <Work
            changeText={changeText}
            InfoUser={InfoUser}
            saveUserState={saveUserState}
          />
        </div>
      </div>
    </>
  );
};

export default page;
