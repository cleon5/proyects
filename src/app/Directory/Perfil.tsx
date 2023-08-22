"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../Styles/Perfil.css";
import { useSelector } from "react-redux"; //
import { LocalStorageGetUser } from "@/services/localStorage";
import DatosPerfil from "../Perfil/DatosPerfil";
import Proyects from "../Perfil/Proyects";
import Work from "../Perfil/Work";
import { GetProyectId } from "@/services/ConsultsAxios";
import { UserModel } from "@/Models/Interfaces";

type Props = {
    User: any;
};
const Perfil = (props: Props) => {
  const [InfoUser, setInfoUser] = useState<UserModel>({
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
  const [TmpUser, setTmpUser] = useState<UserModel>({
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
    let tmpState: Array<Object> = [];
    useData?.Proyects?.map(async (id: String) => {
      console.log(id);
      let p = await GetProyectId(id);
      setProyectsList((state) => [state, p]);
    });
    console.log(tmpState);
  };

  const GetUser = async () => {
      setInfoUser(props.User);
      setTmpUser(props.User);

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
          changeText={null}
          InfoUser={InfoUser}
          saveUserState={null}
        />

        <div className="Proyects">
          <div className="techStack">
            <div className="d-flex justify-content-between px-5 align-items-center">
              <h2 className="text-white">Tech Stack</h2>
              {!props.User && (
              <button
                data-bs-toggle="modal"
                data-bs-target="#modalStacks"
                className="btn btn-light rounded-2"
              >
                <i className="fa-solid fa-pen-to-square fa-2xl"></i>
              </button>
              )}
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
              changeText={null}
              InfoUser={InfoUser}
              AddProyect={null}
              saveUserState={null}
              List={ProyectsList}
            />
          )}

          {InfoUser.Alias.length > 0 && (
            <Work
              AddWork={null}
              changeText={null}
              InfoUser={InfoUser}
              saveUserState={null}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Perfil;
