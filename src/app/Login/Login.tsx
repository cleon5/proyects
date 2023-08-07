import React from "react";

type Props = {
  ChangeLogin: any;
};

const Login = (props: Props) => {
  return (
    <div className="seccionInter">
      <div className="Register">
        <h2 className="text-light"> Inicia Secion</h2>
        <label className=" mt-4">
          Correo
          <input className="form-control" type="text" />
        </label>
        <label className=" mt-4">
          Password
          <input className="form-control" type="password" />
        </label>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>

        <p className="text-warning mt-3">
          Registrate{" "}
          <a className="text-danger" onClick={() => props.ChangeLogin()}>
            Aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
