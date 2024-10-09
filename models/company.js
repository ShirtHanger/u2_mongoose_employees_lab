//we are pulling in a thing called a Schema, using more of those Mongoose modules we installed
const { Schema } = require('mongoose')


//creating a new Object called a Company, that follows the rules that Mongoose defines through the schema
const Company = new Schema(
  {
    company_name: { type: String, required: true },
    country: { type: String, required: true },
    product: { type: String, required: true },
    established: { type: Number, required: true },
    type: { type: String, required: true },
    not_evil: { type: Boolean, required: true },
  },
  { timestamps: true }
)

//exporting this thing called a Company and all of its information so other files can use it
module.exports = Company