import React from 'react'

type Props = {
    changeText: any;
    InfoUser:any;
    saveUserState:any;
  };
const Proyects = (props:Props) => {
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
                            src={''}
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
                      <label htmlFor="GitHub" className="form-label">
                        GitHub
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="GitHub"
                        name="Proyects"
                        onChange={(e) => props.changeText(e)}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="Linkedin" className="form-label">
                        Linkedin
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Linkedin"
                        name="Links"
                        onChange={(e) => props.changeText(e)}
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
                    onClick={() => props.saveUserState()}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
</>
  )
}

export default Proyects