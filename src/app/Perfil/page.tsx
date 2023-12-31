"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../Styles/Perfil.css";
import { useSelector } from "react-redux"; //
import { LocalStorageGetUser } from "@/services/localStorage";
import DatosPerfil from "./DatosPerfil";
import Proyects from "./Proyects";
import Work from "./Work";
import {
  GetProyectId,
  GetUserID,
  GetWorkId,
  UpdateUser,
} from "@/services/ConsultsAxios";

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
  const [ProyectsList, setProyectsList] = useState<Array<Object>>([]);
  const [WorkList, setWorkList] = useState<Array<Object>>([]);

  const saveUserState = async () => {
    await axios
      .put(`http://localhost:3000/api/user/${InfoUser._id}`, TmpUser)
      .then((data) => {
        console.log(data.data);
      });
  };

  const changeText = (event: any) => {
    const { id, value, name } = event.target;

    if (name) {
      const newValuesObject = {
        ...TmpUser,
        [name]: {
          ...TmpUser.Links,
          [id]: value,
        },
      };
      setTmpUser(newValuesObject);
    } else {
      const newValues = {
        ...TmpUser,
        [id]: value,
      };
      setTmpUser(newValues);
    }
    console.log(TmpUser);
  };

  const AddWork = async (id: String) => {
    let tmpControl = TmpUser.Experience;
    tmpControl.push(id);
    console.log(tmpControl);
    const newValuesObject = {
      ...TmpUser,
      Experience: tmpControl,
    };
    setTmpUser(newValuesObject);
    await saveUserState();
  };

  const AddProyect = async (id: String) => {
    let tmpControl = TmpUser.Proyects;
    tmpControl.push(id);
    console.log(tmpControl);
    const newValuesObject = {
      ...TmpUser,
      Proyects: tmpControl,
    };
    setTmpUser(newValuesObject);
    await saveUserState();
  };

  const GetProyect = async (useData: any) => {
    useData?.Proyects?.map(async (id: String) => {
      let p = await GetProyectId(id);
      setProyectsList((state) => [state, p]);
    });
  };

  async function GetWork(useData: any) {
    useData.Experience.map(async (id: String) => {
      let x = await GetWorkId(id);
      setWorkList((state) => [...state, x]);
    });
  }

  const GetUser = async () => {
    if (UserData.User == null) {
      let UserTmp: any = LocalStorageGetUser();
      let toSet = UserTmp
        ? UserTmp
        : await GetUserID("64d117058ff72de63c820e0e");
      await GetProyect(toSet);
      await GetWork(toSet);
      setInfoUser(toSet);
      setTmpUser(toSet);
    } else {
      setInfoUser(UserData.User);
      setTmpUser(UserData.User);
      await GetProyect(UserData.User);
      await GetWork(UserData.User);
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
      <div className="Perfil text-white ">
        <DatosPerfil
          changeText={changeText}
          InfoUser={InfoUser}
          saveUserState={saveUserState}
        />

        <div className="Proyects">
          <div className="techStack">
            <div className="d-flex justify-content-between px-5 align-items-center">
              <h2 className="text-white">Tech Stack</h2>
              <button
                data-bs-toggle="modal"
                data-bs-target="#modalStacks"
                className="btn btn-light rounded-2"
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

          {InfoUser.Alias.length > 0 && (
            <Proyects
              changeText={changeText}
              InfoUser={InfoUser}
              AddProyect={AddProyect}
              saveUserState={saveUserState}
              List={ProyectsList}
            />
          )}

          {InfoUser.Alias.length > 0 && (
            <Work
              AddWork={AddWork}
              changeText={changeText}
              InfoUser={InfoUser}
              saveUserState={saveUserState}
              WorkList={WorkList}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default page;
