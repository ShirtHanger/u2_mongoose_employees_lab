
//this pulls in all of our mongoose information from the modules we installed through node (the `npm i mongoose` commmand)
//they are required for all of these actions to run... hence 'require'
const mongoose = require('mongoose')


//we are chaining together a series of commands using dot notation. At its most basic skeleton, can see how `console.log()` and `document.querySelector()` 
//are similar to mongoose.connect().then()


//connect makes sure our JS file is attached to our MongoDB 
//.then is similar to our async/await functionality, it makes sure the previous function is run before we get to the next one and its callback function
//.catch is a way to protect against errors, so we'l see what exactly is going wrong

mongoose.connect( // Place YOUR connection string with the password. Before the ?, enter desired database name
  'mongodb+srv://shirt-skunk-63:<insert-password>@ga-student-cluster.6hjot.mongodb.net/employeeDatabase?retryWrites=true&w=majority&appName=ga-student-cluster'
) // Local connection host
.then(()=> {
  console.log('Successfully connected to MongoDB!') // Confirmation for us
})
.catch((e) => { // Checks for errors
  console.error('Connection error', e.message)
})
    
mongoose.set('debug', true)

//from here on in, whenever we use the variable 'db' it refers to the connection to Mongo that we've made here
const db = mongoose.connection

//we are exporting our `db` variable and all of its associated info, so that it can be required and imported into other files in our app
module.exports = db