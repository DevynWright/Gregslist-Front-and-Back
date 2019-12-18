import mongoose from "mongoose";

const Schema = mongoose.Schema;

const House = new Schema(
  {
    city: { type: String, required: true, maxlength: 20 },
    state: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    year: { type: Number, max: 2040, min: 1800 },
    imgUrls: [{ type: String }],
    description: { type: String, maxlength: 250 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;
