const connection = require('./db/connect')
const express = require('express');
const app  = express();
const tasks = require('./routes/tasks')

//middleware
app.use(express.static('./public1'));
app.use(express.json())


//routes

app.use('/api/v1/tasks',tasks)

const port = 3000;

const start = async () => {
           try{
            await connection()
            app.listen(port, () => console.log(`Server is running on port ${port}`));
           }catch(err){

            console.log("error");

           };
           
        
        }
 start()
