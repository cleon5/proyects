"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../Styles/Perfil.css";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux'; // 

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
}

const page = () => {
  const UserData:any = useSelector((state:any) => state.UserSlice);
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
    Skills: [],
    Links: { GitHub: "", Linkedin: "" },
  });

  const GetUser = async () => {
    await axios
      .get("http://localhost:3000/api/user/64d117058ff72de63c820e0e")
      .then((data) => {
        //console.log(data.data);
        setInfoUser(data.data);
      });
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
        <div className="About">
          <div
            className="photo"
            style={{ backgroundImage: `url(${Data.image})` }}
          ></div>
          <div className="information">
            <h3>{Data.username}</h3>
            <div className="linksSocila">
              <i
                className="fa-brands fa-facebook fa-2xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="fa-brands fa-facebook fa-2xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="fa-brands fa-facebook fa-2xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>

            <hr />
            <div className="section_info">
              <label>About me</label>

              <p>{InfoUser.Alias}</p>
            </div>
            <hr />
          </div>
        </div>

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

          <div className="techStack">
            <h3>Proyects</h3>
            <hr />
            <div className="">
              {InfoUser?.Information?.Proyects?.map(
                (proyect: any, index: any) => (
                  <div className="card mb-3" style={{ width: "95%" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <a href="">
                          <img
                            src={Data.image}
                            style={{ backgroundSize: "cover", height: "100%" }}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{proyect.title}</h5>
                          <hr />
                          <p className="card-text">{proyect.description}</p>
                          <p className="card-text">
                            {/*proyect?.tecnologias?.map((skill, index) => (
                          <span className={Data.bange[index] + " skillbadge"}>
                            <div className="stack">
                              <i className="fa-brands fa-square-js fa-2xl"></i>{" "}
                              {skill}
                            </div>
                          </span>
                        ))*/}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="techStack">
            <h3>Work</h3>
            <hr />
            <div className="proyectsList">
              {Data?.skills?.hard?.map((skill, index) => (
                <div
                  className="card mb-3"
                  style={{ width: "48%", backgroundColor: "" }}
                  key={index}
                >
                  <div className="row g-0">
                    <div className="col-md-4 p-3">
                      <p className="card-text text-end">
                        Junio 2022 a Julio 2023{" "}
                      </p>
                      <p className="card-text text-end">
                        <small className="text-body-secondary">Cenedic</small>
                      </p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Programador jr </h5>
                        <hr />
                        <p className="card-text">
                          Se creo una web en react para la gestion de tareas y
                          el despliege de varios cursos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="modalStacks"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal stacks
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
