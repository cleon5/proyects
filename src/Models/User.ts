import { Schema, model, models } from "mongoose";

const infoDefault = {
  Proyects:[],
  Experience:[]
}

const User:Schema = new Schema(
  {
    Alias: {
      type: String,
      required: [true, "Alias is Required"],
      unique:[true],
      validate: {
        validator: async function (value:any) {
          const user2 = await user.findOne({ Alias: value });
          return !user2;
        },
        message: 'The Alias is used', 
      }
    },
    Correo: {
      type: String,
      required: [true, "Email is Required"],
      unique:[true],
      validate: {
        validator: async function (value:any) {
          const user2 = await user.findOne({ Correo: value });
          return !user2;
        },
        message: 'The Email is used', 
      }
    },
    Name:{
      type: String,
      required: [true, "Name is required"],
    },
    Description:{
      type:String,
      default:"",
    },
    Skills:{
      type:Array,
      default:[]
    },
    Password: {
      type: String,
      required: [true, "Password is required"],
    },
    Information: {
      type: Object,
      default:infoDefault,
      required: [true, "Information is required"],
    },
    Proyects:{
      type:Array,
      default:[]
    },
    Experience:{
      type:Array,
      default:[]
    },
    Links:{
      type:Object,
      default:{GitHub:"", Linkedin:""}
    }
  },
  {
    timestamps: true,
  }
);

const user =  models.User || model("User", User)

export default user;