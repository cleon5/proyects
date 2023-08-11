import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { saveUserState } from "@/redux/features/UserSlice";

type Props = {
  ChangeLogin: any;
};

const Login = (props: Props) => {
  const UserData:any = useAppSelector((state) => state.UserSlice);
  const dispatch = useAppDispatch();


  const [Data, setData] = useState({
    Correo: "",
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
  const LoginUser = () => {
    axios.post("http://localhost:3000/api/user/login", Data).then((user) => {
      console.log(user.data);
      dispatch(saveUserState(user.data))
    });
  };

  return (
    <div className="seccionInter">
      <div className="Register">
        <h2 className="text-light"> Inicia Secion</h2>
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

        <button
          onClick={() => LoginUser()}
          type="submit"
          className="btn btn-primary mt-4"
        >
          Submit
        </button>

        <p className="text-warning mt-3">
          Registrate -
          <a className="text-danger" onClick={() => props.ChangeLogin()}>
            Aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
