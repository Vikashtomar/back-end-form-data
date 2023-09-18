/** @format */

import mongoose from "mongoose";
// const connection = mongoose.connect(`mongodb+srv://vikas:3roCyof9WWwIeYX7@cluster0.dixthwt.mongodb.net/`)
const connection = mongoose.connect(
  `mongodb+srv://vikas:DV5VuK6gvZjRzjnS@cluster0.dixthwt.mongodb.net/?retryWrites=true&w=majority`
);
export default connection;
