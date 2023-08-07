import React from "react";

type Props = {
  ChangeLogin: any;
};

const Register = (props: Props) => {
  return (
    <div className="seccionInter">
      <div className="Register">
        <h2 className="text-light"> Registrate</h2>
        <label className=" mt-4">
          Alias
          <input className="form-control" type="text" />
        </label>
        <label className=" mt-4">
          Correo
          <input className="form-control" type="text" />
        </label>
        <label className=" mt-4">
          Password
          <input className="form-control" type="password" />
        </label>
        <label className=" mt-4">
          Confirm Password
          <input className="form-control" type="password" />
        </label>

        <button type="submit" className="btn btn-primary mt-4">
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
