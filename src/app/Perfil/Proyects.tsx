"use client";
import React, { useState, useEffect } from "react";
import { CreateProyect } from "@/services/ConsultsAxios";
import { GetProyectId} from "@/services/ConsultsAxios";

type Props = {
  changeText: any;
  InfoUser: any;
  saveUserState: any;
  AddProyect: any;
  List: any;
};

type ProyectModel = {
  Title: String;
  Description: String;
  Image: String;
  Skills: Array<String>;
  Links: { GitHub: String; url: String };
};

const Proyects = (props: Props) => {
  const [ProyectState, setProyectState] = useState<Array<Object>>([]);
  const [TmpProyect, setTmpProyect] = useState<ProyectModel>({
    Title: "",
    Description: "",
    Image: "",
    Skills: [],
    Links: { GitHub: "", url: "" },
  });

  async function GetProyect() {
    props.InfoUser.Proyects.map(async (id: String) => {
      let x = await GetProyectId(id);
      setProyectState(state=> [...state, x])
    });
  }

  useEffect(() => {
    GetProyect();
  }, []);


  const changeTextProyects = (event: any) => {
    const { id, value, name } = event.target;

    if (id == "Skills") {
      let tmpSkills = TmpProyect.Skills;
      let xID = [value];
      tmpSkills.push(value);
      const newValuesSkills = {
        ...TmpProyect,
        [id]: xID,
      };
      setTmpProyect(newValuesSkills);
    }

    if (name) {
      const newValuesObject = {
        ...TmpProyect,
        [name]: {
          ...TmpProyect.Links,
          [id]: value,
        },
      };

      setTmpProyect(newValuesObject);
    } else {
      const newValues = {
        ...TmpProyect,
        [id]: value,
      };
      setTmpProyect(newValues);
    }
  };

  const NewProyect = async () => {
    let data = await CreateProyect(TmpProyect);
    props.AddProyect(data._id);
  };
  const skills = ["Angular", "Js", "React", "React", "React"];
  return (
    <>
      <div className="techStack">
        <div className="d-flex justify-content-between">
          <h3 className="text-white">Proyects</h3>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalProyects"
            className="btn btn-light"
          >
            <i className="fa-solid fa-pen-to-square fa-2xl"></i>
          </button>
        </div>

        <hr />
        <div className="">
          {ProyectState.length > 0 &&
            Object.values(ProyectState)?.map((proyect: any, index: any) => (
              <div
                className="card text-white bg-primary mb-3"
                key={index}
                style={{ width: "95%" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <a href="">
                      <img
                        src={
                          "https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE"
                        }
                        style={{ backgroundSize: "cover", height: "100%" }}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{proyect.Title}</h5>
                      <hr />
                      <p className="card-text">{proyect.Description}</p>
                      <hr />
                      <p className="card-text d-flex flex-wrap">
                        {skills?.map((skill: any, index: any) => (
                          <span
                            key={index}
                            className={
                              "badge rounded-pill text-bg-secondary skillbadge"
                            }
                          >
                            <div className="stack">
                              <i className="fa-brands fa-square-js fa-2xl"></i>
                              {skill}
                            </div>
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>

      <div
        className="modal fade modal-lg"
        id="modalProyects"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edict Perfil
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="form-group row mt-2">
                  <label htmlFor="Title" className="col-sm-2 col-form-label">
                    Title
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="Title"
                      onChange={(e) => changeTextProyects(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label
                    htmlFor="Description"
                    className="col-sm-2 col-form-label"
                  >
                    Description
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      placeholder="..."
                      rows={5}
                      className="form-control"
                      id="Description"
                      onChange={(e) => changeTextProyects(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="Image" className="col-sm-2 col-form-label">
                    Image
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="Image"
                      onChange={(e) => changeTextProyects(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="GitHub" className="col-sm-2 col-form-label">
                    GitHub
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      name="Links"
                      className="form-control"
                      id="GitHub"
                      onChange={(e) => changeTextProyects(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="url" className="col-sm-2 col-form-label">
                    Url
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      name="Links"
                      className="form-control"
                      id="url"
                      onChange={(e) => changeTextProyects(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="Skills" className="col-sm-2 col-form-label">
                    Skills
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="Skills"
                      onChange={(e) => changeTextProyects(e)}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => NewProyect()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyects;
