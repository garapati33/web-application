const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://sai:Sairam4592!@nodeandexpress.2e50b.mongodb.net/0-3TM?retryWrites=true&w=majority&appName=NodeandExpress'

const connection = (url) =>{

return mongoose.connect(connectionString);

}

module.exports = connection


