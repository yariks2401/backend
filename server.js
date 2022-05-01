const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
const port = 3000;

mongoose.connect('mongodb+srv://yariks2401:64meposo!Crm@cluster0.9e6ww.mongodb.net/Crm_System?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(con=>{
    console.log(con.connections);
    console.log('Db connections successful!!!');
})

dotenv.config = ({
    path: './config.env'
})

console.log('Hey');

app.listen(process.env.PORT || 3000, () => {
    console.log('App was started')
})
