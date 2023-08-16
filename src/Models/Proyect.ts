import { Schema, model, models } from "mongoose";

const Proyect:Schema = new Schema(
  {
    Title: {
      type: String,
      required: [true, "Title is Required"],
      unique:[true],
      validate: {
        validator: async function (value:any) {
          const user2 = await proyect.findOne({ Alias: value });
          return !user2;
        },
        message: 'The Title is used', 
      }
    },
    Description:{
      type:String,
      default:"",
    },
    Image:{
      type:String,
      default:"",
    },
    Skills:{
      type:Array,
      default:[]
    },
    Links:{
      type:Object,
      default:{GitHub:"", url:""}
    }
  },
  {
    timestamps: true,
  }
);



const proyect =  models.Proyect || model("Proyect", Proyect)

export default proyect;
