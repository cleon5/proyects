import React, { useState, useEffect } from "react";
import { CreateProyect } from "@/services/ConsultsAxios";
import axios from "axios";

type Props = {
  changeText: any;
  InfoUser: any;
  saveUserState: any;
  AddProyect:any,
};

type ProyectModel = {
  Title: String;
  Description: String;
  Image: String;
  Skills: Array<String>;
  Links: { GitHub: String; url: String };
};

const Proyects = (props: Props) => {
  const [ProyectState, setProyectState] = useState<ProyectModel>({
    Title: "",
    Description: "",
    Image: "",
    Skills: [],
    Links: { GitHub: "", url: "" },
  });
  const [TmpProyect, setTmpProyect] = useState<ProyectModel>({
    Title: "",
    Description: "",
    Image: "",
    Skills: [],
    Links: { GitHub: "", url: "" },
  });

  const changeTextProyects = (event: any) => {
    const { id, value, name } = event.target;

    if (id == "Skills") {
      let tmpSkills = TmpProyect.Skills
      let xID = [value]
      tmpSkills.push(value)
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
    }else{
      const newValues = {
        ...TmpProyect,
        [id]: value,
      };
      setTmpProyect(newValues);
    }

    console.log(TmpProyect)
  };


  const NewProyect = async () => {
    let data = await CreateProyect(TmpProyect);
    console.log(data);
    props.AddProyect(data._id);

  };

  return (
    <>
      <div className="techStack">
        <div className="d-flex justify-content-between">
          <h3>Proyects</h3>
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
          {props.InfoUser?.Information?.Proyects?.map(
            (proyect: any, index: any) => (
              <div className="card mb-3" style={{ width: "95%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <a href="">
                      <img
                        src={""}
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

      <div
        className="modal fade"
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
                <div className="mb-3">
                  <label htmlFor="Title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    onChange={(e) => changeTextProyects(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Description"
                    onChange={(e) => changeTextProyects(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Image" className="form-label">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Image"
                    onChange={(e) => changeTextProyects(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="GitHub" className="form-label">
                    GitHub
                  </label>
                  <input
                    type="text"
                    name="Links"
                    className="form-control"
                    id="GitHub"
                    onChange={(e) => changeTextProyects(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="url" className="form-label">
                    Url
                  </label>
                  <input
                    type="text"
                    name="Links"
                    className="form-control"
                    id="url"
                    onChange={(e) => changeTextProyects(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Skills" className="form-label">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Skills"
                    onChange={(e) => changeTextProyects(e)}
                  />
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
