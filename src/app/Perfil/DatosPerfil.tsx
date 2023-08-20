import React from "react";
import ImageNoUSer from "../../../public/Images/NoUser.jpg";
import Image from "next/image";

type Props = {
  changeText: any;
  InfoUser: any;
  saveUserState: any;
};

const DatosPerfil = (props: Props) => {
  return (
    <>
      <div className="About">
        <div className="">
          <Image src={ImageNoUSer} className="photo" alt="" />
        </div>
        <div className="information">
          <h3 className="text-white">{props.InfoUser.Alias}</h3>
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

            <p>{props.InfoUser.Correo}</p>
          </div>
          <hr />
        </div>
      </div>

      <div
        className="modal fade modal-lg "
        id="modalStacks"
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
                  <label htmlFor="Alias" className="col-sm-2 col-form-label">
                    Alias
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="Alias"
                      placeholder={props.InfoUser.Alias}
                      onChange={(e) => props.changeText(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="Name" className="col-sm-2 col-form-label">
                    Nombre
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder={props.InfoUser.Name}
                      type="text"
                      className="form-control"
                      id="Name"
                      onChange={(e) => props.changeText(e)}
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
                      placeholder={props.InfoUser.Description}
                      rows={5}
                      className="form-control"
                      id="Description"
                      onChange={(e) => props.changeText(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="Imagen" className="col-sm-2 col-form-label">
                    Imagen
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder={props.InfoUser.Imagen}
                      type="text"
                      className="form-control"
                      id="Imagen"
                      onChange={(e) => props.changeText(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="GitHub" className="col-sm-2 col-form-label">
                    GitHub
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder={props.InfoUser.Links.GitHub}
                      type="text"
                      className="form-control"
                      id="GitHub"
                      name="Links"
                      onChange={(e) => props.changeText(e)}
                    />
                  </div>
                </div>

                <div className="form-group row mt-2">
                  <label htmlFor="Linkedin" className="col-sm-2 col-form-label">
                    Linkedin
                  </label>
                  <div className="col-sm-10">
                    <input
                      placeholder={props.InfoUser.Links.Linkedin}
                      type="text"
                      className="form-control"
                      id="Linkedin"
                      name="Links"
                      onChange={(e) => props.changeText(e)}
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
                onClick={() => props.saveUserState()}
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

export default DatosPerfil;
