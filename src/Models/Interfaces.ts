export interface UserModel {
  _id: String;
  Alias: String;
  Name: String;
  Description: String;
  Image: String;
  Correo: String;
  Password: String;
  Skills: Array<String>;
  Information: { Proyects: Object[]; Experience: any[] };
  Links: { GitHub: String; Linkedin: String };
  Proyects: Array<String>;
  Experience: Array<String>;
}


export interface ProyectModel {
    Title: String;
    Description: String;
    Image: String;
    Skills: Array<String>;
    Links: { GitHub: String; url: String };
  };

export interface WorkModel {
  Position: String;
  Company: String;
  Description: String;
  StartDate: String;
  EndDate: String;
  PageWork: String;
  Ubication: String;
  Tipo: String;
};