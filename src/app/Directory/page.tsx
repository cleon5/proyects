"use client";
import React, { use, useEffect, useState } from "react";
import { GetAllUser } from "@/services/ConsultsAxios";
import "../../Styles/Directory.css";

const page = () => {
  const [UsersList, setUsersList] = useState<Array<Object>>([]);
  const GetUsers = async () => {
    let users = await GetAllUser();
    setUsersList(users);
  };

  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <div className="Directory">
      <div className="ListUser">
        <div>
          <h1>Directory of Users</h1>
        </div>

        <select
          className="form-select"
          multiple
          aria-label="Multiple select example"
        >
          {UsersList?.map((user: any, key: any) => (
            <option key={key} value={user._id}>
              {user.Alias}
            </option>
          ))}
        </select>
      </div>

      <div className="Infouser">asdasda</div>
    </div>
  );
};

export default page;
