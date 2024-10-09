
//we can now give those schemas a name to work with so we can refer to and work with them
const mongoose = require('mongoose')
const EmployeeSchema = require('./employee')
const CompanySchema = require('./company')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Employee = mongoose.model('Employee', EmployeeSchema)
const Company = mongoose.model('Company', CompanySchema)

module.exports = {
  Employee,
  Company
}