// @flow

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    photo: {
      type: String
    },
    price: {
      type: String,
      required: false
    },
    sizes: {
      type: String,
      enum: ["P", "M", "G", "GG"],
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    },
    collection: "product"
  }
);

export default mongoose.model("Product", Schema);
