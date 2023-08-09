"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  ChangeLogin: any;
};

const Register = (props: Props) => {
  const [Error, setError] = useState<any>();
  const [ConfirmPass, setConfirmPass] = useState("");
  const [Data, setData] = useState({
    Alias: "",
    Correo: "",
    Name: "",
    Password: "",
  });
  const cambioText = (event: any) => {
    const { name, value } = event.target;
    const newValues = {
      ...Data,
      [name]: value,
    };
    setData(newValues);
  };

  const RegistrarUser = () => {
    Data.Alias && Data.Correo && Data.Password == ConfirmPass
      ? axios.post("http://localhost:3000/api/user", Data).then((Response) => {
          typeof Response.data === "string" ? setError(Response.data) : null;
          setError('')
          console.log(Response.data)
        }).catch(err => {
          setError(Object.values(err.response.data))
        })
      : setError("Error en datos");
  };

  return (
    <div className="seccionInter">
      <div className="Register">
        <h2 className="text-light"> Registrate</h2>
        {Error && <p className="text-danger">{Error[0].message}</p>}

        <label className=" ">
          Alias
          <input
            name="Alias"
            onChange={(e) => cambioText(e)}
            className="form-control"
            type="text"
          />
        </label>
        <label className=" mt-4">
          Nombre
          <input
            name="Name"
            onChange={(e) => cambioText(e)}
            className="form-control"
            type="text"
          />
        </label>
        <label className=" mt-4">
          Correo
          <input
            name="Correo"
            onChange={(e) => cambioText(e)}
            className="form-control"
            type="text"
          />
        </label>
        <label className=" mt-4">
          Password
          <input
            name="Password"
            onChange={(e) => cambioText(e)}
            className="form-control"
            type="password"
          />
        </label>
        <label className=" mt-4">
          Confirm Password
          <input
            name="PasswordConfirm"
            className="form-control"
            type="password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={() => RegistrarUser()}
        >
          Submit
        </button>

        <p className="text-warning mt-3">
          Si ya tienes Cuenta registrate{" "}
          <a className="text-danger" onClick={() => props.ChangeLogin()}>
            Aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
