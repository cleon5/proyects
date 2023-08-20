import { Schema, model, models } from "mongoose";

const Work: Schema = new Schema(
  {
    Position: {
      type: String,
      required: [true, "Position is Required"],
    },
    Company: {
      type: String,
      required: [true, "Company is Required"],
    },
    Description: {
      type: String,
      default: "",
    },
    StartDate: {
      type: String,
      default: "",
      required: [true, "Date is Required"],
    },
    EndDate: {
      type: String,
      default: "",
      required: [true, "Date is Required"],
    },
    PageWork: {
      type: String,
      default: "",
    },
    Ubication: {
      type: String,
      default: "",
    },
    Tipo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const work = models.Work || model("Work", Work);
export default work;
