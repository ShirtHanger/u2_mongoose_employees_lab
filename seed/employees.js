const db = require('../db')
const { Company, Employee } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const umbrellaCorp = await Company.find({ company_name: 'Umbrella Corporation' })
  const mishimaZaibatsu = await Company.find({ company_name: 'Mishima Zaibatsu' })
  const internationalContractAgency = await Company.find({ company_name: 'International Contract Agency' })

  const employees = [
    {
    first_name: 'Christine',
    last_name: 'Henri',
    email: 'bcevc@yahoo.ca',
    city: 'Dallas, Texas',
    job_role: 'researcher',
    salary_in_usd: 40000,
    is_suspicious: false,
    company_id: umbrellaCorp[0]._id
    },
   {
    first_name: 'Byron',
    last_name: 'Cartwright',
    email: 'dhrakar@icloud.com',
    city: 'New Windsor, New York',
    job_role: 'Senior Staff',
    salary_in_usd: 50000,
    is_suspicious: false,
    company_id: umbrellaCorp[0]._id
    },
    {
    first_name: 'Joel',
    last_name: 'Allman',
    email: 'devphil@yahoo.com',
    city: 'Atlanta, Georgia',
    job_role: 'Vice president',
    salary_in_usd: 45000,
    is_suspicious: false,
    company_id: umbrellaCorp[0]._id
    },
    {
    first_name: 'Kazuya',
    last_name: 'Mishima',
    email: 'philen@att.net',
    city: 'Mishima Estate',
    job_role: 'CEO',
    salary_in_usd: 500000,
    is_suspicious: false,
    company_id: mishimaZaibatsu[0]._id
    },
    {
    first_name: 'Matsui',
    last_name: 'Yoshie',
    email: 'dodong@comcast.net',
    city: 'Saitama',
    job_role: 'Janitor',
    salary_in_usd: 15000,
    is_suspicious: false,
    company_id: mishimaZaibatsu[0]._id
    },
    {
    first_name: 'Koyama',
    last_name: 'Hiroshi',
    email: 'hikoza@sbcglobal.net',
    city: 'Tokyo',
    job_role: 'IT',
    salary_in_usd: 18000,
    is_suspicious: false,
    company_id: mishimaZaibatsu[0]._id
    },
    {
    first_name: 'Diana',
    last_name: 'Burnwood',
    email: 'simone@live.com',
    city: 'Chicago, Illinois',
    job_role: 'Handler',
    salary_in_usd: 200000,
    is_suspicious: false,
    company_id: internationalContractAgency[0]._id
    },
    {
    first_name: 'Tobias',
    last_name: 'Reiper',
    email: 'philen@att.net',
    city: 'Hope, South Dakota',
    job_role: 'Coorporate Liquidator',
    salary_in_usd: 400000,
    is_suspicious: false,
    company_id: internationalContractAgency[0]._id
    },
    {
    first_name: 'Erich',
    last_name: 'Soders',
    email: 'skoch@verizon.net',
    city: 'Cape Town, South Africa',
    job_role: 'Instructor',
    salary_in_usd: 700000,
    is_suspicious: false,
    company_id: internationalContractAgency[0]._id
    }
  ]

  await Employee.insertMany(employees)
  console.log('Created employees with companys!')
}
const run = async () => {
  await main()
  db.close()
}

run()