"use client";
import React, { useState, useEffect } from "react";
import "../../Styles/Perfil.css";
import DatosPerfil from "../Perfil/DatosPerfil";
import Proyects from "../Perfil/Proyects";
import Work from "../Perfil/Work";
import { GetProyectId, GetWorkId } from "@/services/ConsultsAxios";
import { UserModel } from "@/Models/Interfaces";

type Props = {
  User: UserModel;
};
const Perfil = (props: Props) => {
  const [ProyectsList, setProyectsList] = useState<Array<Object>>([]);
  const [WorkList, setWorkList] = useState<Array<Object>>([]);

  const GetProyect = async (useData: any) => {
    setProyectsList([]);
    useData?.Proyects?.map(async (id: String) => {
      let p = await GetProyectId(id);
      setProyectsList((state) => [state, p]);
    });
  };

  const GetWork = async (useData: any) => {
    setWorkList([]);
    useData.Experience.map(async (id: String) => {
      let x = await GetWorkId(id);
      setWorkList((state) => [...state, x]);
    });
  };

  const GetUser = async () => {
    GetProyect(props.User);
    GetWork(props.User);
  };

  useEffect(() => {
    GetUser();
  }, [props.User]);

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
          InfoUser={props.User}
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

            {props.User?.Skills.length > 0 ? (
              props.User?.Skills?.map((skill, index) => (
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

          {props.User.Alias.length > 0 && (
            <Proyects
              changeText={null}
              InfoUser={props.User}
              AddProyect={null}
              saveUserState={null}
              List={ProyectsList}
            />
          )}

          {props.User.Alias.length > 0 && (
            <Work
              AddWork={null}
              changeText={null}
              InfoUser={props.User}
              saveUserState={null}
              WorkList={WorkList}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Perfil;