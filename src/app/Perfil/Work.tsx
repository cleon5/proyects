import React from "react";
type Props = {
  changeText: any;
  InfoUser: any;
  saveUserState: any;
};

const Work = (props: Props) => {
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
        <div className="d-flex justify-content-between">
          <h3 className="text-white">Work</h3>
          <button
            data-bs-toggle="modal"
            data-bs-target="#modalWork"
            className="btn btn-light"
          >
            <i className="fa-solid fa-pen-to-square fa-2xl"></i>
          </button>
        </div>
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
                  <p className="card-text text-end">Junio 2022 a Julio 2023</p>
                  <p className="card-text text-end">
                    <small className="text-body-secondary">Cenedic</small>
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Programador jr </h5>
                    <hr />
                    <p className="card-text">
                      Se creo una web en react para la gestion de tareas y el
                      despliege de varios cursos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                    onChange={(e) => e}
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
                    onChange={(e) => e}
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
                    onChange={(e) => e}
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
                    onChange={(e) => e}
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
                    onChange={(e) => e}
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
                    onChange={(e) => e}
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
              <button type="button" className="btn btn-primary">
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
