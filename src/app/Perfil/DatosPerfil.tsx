import React from 'react'
import ImageNoUSer from '../../../public/Images/NoUser.jpg'
type Props = {
    changeText: any;
    InfoUser:any;
    saveUserState:any;
  };
const DatosPerfil = (props:Props) => {
  return (
    <>
        <div className="About">
          <div
            className="photo"
  style={{backgroundImage: `url(../../../public/Images/NoUser.jpg) `}/* props.InfoUser.Image ? {backgroundImage: `url(${props.InfoUser.Image})`}: {backgroundImage: `url(../../public/Images/NoUser.jpg)`}*/}
          ></div>
          <div className="information">
            <h3>{props.InfoUser.Alias}</h3>
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
          className="modal fade"
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
                  <div className="form-group">
                    <label htmlFor="name" className="form-label mt-4">
                      Alias
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Alias"
                      placeholder="Alias"
                      onChange={(e) => props.changeText(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      onChange={(e) => props.changeText(e)}
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
                      onChange={(e) => props.changeText(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Imagen" className="form-label">
                      Imagen
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Imagen"
                      onChange={(e) => props.changeText(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="GitHub" className="form-label">
                      GitHub
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="GitHub"
                      name="Links"
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

export default DatosPerfil