
//pulling in our db module, and the deconstructed object of Company, with all of its information
const db = require('../db')
const { Company } = require('../models')


//attaching to the db, and giving us an error if anything goes wrong
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions. That way, even if it only takes .01 of second, it still won't throw things out of order
const main = async () => {
  const companys = [
    {
      company_name: 'Umbrella Corporation',
      country: 'United States of America',
      product: 'genetic research',
      established: 1968,
      type: "public",
      not_evil: false
    },
    {
      company_name: 'Mishima Zaibatsu',
      country: 'Japan',
      product: 'weapons',
      established: 1936,
      type: "private",
      not_evil: false
    },
    {
      company_name: 'International Contract Agency',
      country: 'South Africa',
      product: 'Professional Hits',
      established: 1965,
      type: "public",
      not_evil: false
      }
  ]
 
 //running our Mongo commands through JS! How cool is that!
 //it is cool
  await Company.insertMany(companys)
  // using console.log to see the data we've seen
  console.log('Created companys!')
}

//we keep these functions seperate so they can each run independently (Atomically) and perform their necessary task. 
//this is a bit complicated, yes, but it will prevent A Lot of errors we'd see if we didn't do this
const run = async () => {
//runs our main function and awaits for the data to populate
  await main()
  //closes our db after its run so things don't break
  db.close()
}

run()