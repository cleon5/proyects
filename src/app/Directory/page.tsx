"use client";
import React, { useEffect, useState } from "react";
import { GetAllUser, GetUserID } from "@/services/ConsultsAxios";
import "../../Styles/Directory.css";
import ImageNoUSer from "../../../public/Images/NoUser.jpg";
import Image from "next/image";
import Perfil from "./Perfil";

const page = () => {
  const [UsersList, setUsersList] = useState<Array<Object>>([]);
  const [CurrentUser, setCurrentUser] = useState<any>();
  const [Select, setSelect] = useState<String|null>(null)
  const GetUsers = async () => {
    let users = await GetAllUser();
    setUsersList(users);
  };

  const DisplayUser = async (id: String) => {
    setSelect(id)
    const user = await GetUserID(id);
    setCurrentUser(null);
    setCurrentUser(user);
  };
  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <div className="Directory p-2 ">
      <div className="ListUser">
        <div>
          <h1 className=" text-center ">Directory of Users</h1>
        </div>

        <div className="mt-2 ">
          {UsersList?.map((user: any, key: any) => (
            <button
              className={Select == user._id ? 'UserOption selected': 'UserOption'}
              key={key}
              onClick={() => DisplayUser(user._id)}
            >
              <div>
                <Image
                  src={ImageNoUSer}
                  width={50}
                  className="ImagenOption"
                  alt=""
                />
              </div>
              <h3 className="OptionName">{user.Alias}</h3>
            </button>
          ))}
        </div>
      </div>

      <div className="Infouser">
        {CurrentUser && <Perfil User={CurrentUser} />}
      </div>
    </div>
  );
};

export default page;
