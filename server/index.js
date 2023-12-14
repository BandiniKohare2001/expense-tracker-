import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import { postApiTransaction, getAllTransactions, deleteTransaction, editTransation, displayedit } from "./controllers/transaction.js"
import { postuserdata, userlogin } from "./controllers/loginSignup.js";
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use(express.json());

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
    if(conn) {
        console.log('MongoDB Connected');
    }
    }catch(err){
        console.log(err.message);
    }
    
};
connectDB();



app.post('/api/transaction', postApiTransaction)

app.get('/api/transaction', getAllTransactions );

app.post('/api/signup', postuserdata);

app.post('/api/login', userlogin);

app.delete('/api/transaction/:id', deleteTransaction)

app.put('/api/edittransaction/:id', editTransation)

app.get('/api/gettransaction/:id', displayedit)


const PORT = 5000;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('*', (req, res) => { res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html')) });
}


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})