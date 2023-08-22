import { CreateWork, GetWorkId } from "@/services/ConsultsAxios";
import React, { useState, useEffect } from "react";
type Props = {
  changeText: any;
  InfoUser: any;
  saveUserState: any;
  AddWork: any;
};

type WorkModel = {
  Position: String;
  Company: String;
  Description: String;
  StartDate: String;
  EndDate: String;
  PageWork: String;
  Ubication: String;
  Tipo: String;
};

const Work = (props: Props) => {
  const [WorkState, setWorkState] = useState<Array<Object>>([]);
  const [TmpWork, setTmpWork] = useState<WorkModel>({
    Position: "",
    Company: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    PageWork: "",
    Ubication: "",
    Tipo: "",
  });

  const changeTextWork = (event: any) => {
    const { id, value } = event.target;

    const newValues = {
      ...TmpWork,
      [id]: value,
    };
    setTmpWork(newValues);
  };
  const NewWork = async () => {
    let data = await CreateWork(TmpWork);
    props.AddWork(data._id);
  };
  async function GetWork() {
    props.InfoUser.Experience.map(async (id: String) => {
      let x = await GetWorkId(id);
      setWorkState((state) => [...state, x]);
    });
  }
  useEffect(() => {
    GetWork();
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
      <div className="techStack">
        <hr style={{ marginLeft: "25%", width: "50%", color: "gray" }} />
        <div className="d-flex justify-content-between px-5 align-items-center ">
          <h2 className="text-white">Work</h2>
          {props.changeText && (
            <button
              data-bs-toggle="modal"
              data-bs-target="#modalWork"
              className="btn btn-light rounded-2"
            >
              <i className="fa-solid fa-pen-to-square fa-2xl"></i>
            </button>
          )}
        </div>
        <hr />
        <div className="proyectsList">
          {WorkState?.map((work: any, index: any) => (
            <div
              className="card mb-1 bg-primary text-white "
              style={{
                width: "88%",
                backgroundColor: "",
                borderRadius: "10px",
              }}
              key={index}
            >
              <div className="row g-0">
                <div className="col-md-4 p-3">
                  <p className="card-text text-end">
                    {work.StartDate} to {work.EndDate}
                  </p>
                  <p className="card-text text-end">
                    <small className="text-body-secondary text-capitalize">
                      {work.Tipo}
                    </small>
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {work.Position} - {work.Company}
                    </h5>
                    <hr />
                    <p className="card-text">{work.Description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade modal-lg "
        id="modalWork"
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
                  <label htmlFor="Position" className="col-sm-2 col-form-label">
                    Position
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="Position"
                      onChange={(e) => changeTextWork(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="Company" className="col-sm-2 col-form-label">
                    Company
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="Company"
                      onChange={(e) => changeTextWork(e)}
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
                      rows={3}
                      className="form-control"
                      id="Description"
                      onChange={(e) => changeTextWork(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label
                    htmlFor="StartDate"
                    className="col-sm-2 col-form-label"
                  >
                    StartDate
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="StartDate"
                      onChange={(e) => changeTextWork(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="EndDate" className="col-sm-2 col-form-label">
                    EndDate
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="EndDate"
                      onChange={(e) => changeTextWork(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="PageWork" className="col-sm-2 col-form-label">
                    PageWork
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="PageWork"
                      onChange={(e) => changeTextWork(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label
                    htmlFor="Ubication"
                    className="col-sm-2 col-form-label"
                  >
                    Ubication
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="Ubication"
                      onChange={(e) => changeTextWork(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="Tipo" className="col-sm-2 col-form-label">
                    Tipo
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder="..."
                      type="text"
                      className="form-control"
                      id="Tipo"
                      onChange={(e) => changeTextWork(e)}
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
                onClick={() => NewWork()}
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

export default Work;
