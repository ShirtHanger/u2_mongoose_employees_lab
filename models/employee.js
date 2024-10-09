const { Schema } = require('mongoose')

const Employee = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    job_role: { type: String, required: true },
    salary_in_usd: { type: Number, required: true },
    is_suspicious: { type: Boolean, required: true },
    company_id: { type: Schema.Types.ObjectId, ref: 'company_id' },
  },
  { timestamps: true }
)

module.exports = Employee