import React from 'react'
type Props = {
    changeText: any;
    InfoUser:any;
    saveUserState:any;
  };

const Work = (props:Props) => {
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
                        Junio 2022 a Julio 2023
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
    </>
  )
}

export default Work