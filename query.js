const db = require('./db')
const { Employee, Company } = require('./models')

const listEmployees = async () => {
    const company = await Company.findOne({ company_name: 'Umbrella Corporation' })
    const employees = await Employee.find({ company_id: company })
    for (employee of employees) {
        console.log(`We found: ${employee.first_name} ${employee.last_name} from Umbrella Corp!`)
}
}

const updateCompanyType = async () => {
  const updated = await Company.updateOne(
      { type: 'private' },
      { type: 'public' }
  )
  console.log(updated)
}

const updateEmployeeSalary = async () => {
    const updated = await Employee.updateOne(
        { salary_in_usd: 15000 },
        { salary_in_usd: 25000 }
    )
    console.log(updated)
  }


const updateEmployeeCity = async () => {
const updated = await Employee.updateOne(
    { city: 'Tokyo' },
    { city: 'Osaka, Japan' }
)
console.log(updated)
}

const deleteEmployee = async () => {
  let deleted = await Employee.deleteOne({ first_name: 'Erich' })
  console.log(deleted)
}

const deleteEmployees = async () => {
    const company = await Company.findOne({ company_name: 'Umbrella Corporation' })
    let deleted = await Employee.deleteMany({ company_id: company })
    console.log(deleted)
  }

async function main() {
  try {
     // await listEmployees()
    // await updateEmployeeSalary()
    //   await updateCompanyType()
    // await updateEmployeeCity()
    // await deleteEmployee()
     await deleteEmployees()
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()