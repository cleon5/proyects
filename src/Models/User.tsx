import { Schema, model, models } from "mongoose";

const User = new Schema(
  {
    Alias: {
      type: String,
      required: [true, "is required "],
    },
    Correo: {
      type: String,
      required: [true, "isRequire"],
    },
    Password: {
      type: String,
      required: [true, "isRequire"],
    },
    Information: {
      type: Object,
      required: [true, "isRequire"],
    }
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", User);
