import axios from "axios";

const urlBase = "http://localhost:3000/api/";

//Consultas Axios User
export const GetUserID = async (id: String) => {
  let response = await axios.get(`${urlBase}user/${id}`);
  //console.log(response.data);
  return response.data;
};

export const GetAllUser = async () => {
  let response = await axios.get(`${urlBase}user`);
  //console.log(response.data);
  return response.data;
};


export const CreateUser = async (DataUser: Object) => {
  let resp = await axios.post(`${urlBase}user`, DataUser);
  return resp.data;
};

export const UpdateUser = async (id: String, DataUser: Object) => {
  let resp = await axios.put(`${urlBase}user/${id}`, DataUser);
  return resp.data;
};

//Consultas Axios Proyects

export const GetProyectId = async (id: String) => {
  let response = await axios.get(`${urlBase}proyects/${id}`);
  //console.log(response.data);
  return response.data;
};

export const CreateProyect= async (DataProyect: Object) => {
  let resp = await axios.post(`${urlBase}proyects`, DataProyect);
  return resp.data;
};

export const UpdateProyect= async (id: String, DataProyect: Object) => {
  let resp = await axios.put(`${urlBase}proyects/${id}`, DataProyect);
  return resp.data;
};

//Consultas Axios Work

export const GetWorkId = async (id: String) => {
  let response = await axios.get(`${urlBase}work/${id}`);
  //console.log(response.data);
  return response.data;
};

export const CreateWork= async (DataWork: Object) => {
  let resp = await axios.post(`${urlBase}work`, DataWork);
  return resp.data;
};

export const UpdateWork= async (id: String, DataWork: Object) => {
  let resp = await axios.put(`${urlBase}work/${id}`, DataWork);
  return resp.data;
};
