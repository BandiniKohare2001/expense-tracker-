import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import { postApiTransaction, getAllTransactions } from "./controllers/transaction.js"


const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if(conn) {
        console.log('MongoDB Connected');
    }
};
connectDB();

app.get('/health');

app.post('/api/transaction', postApiTransaction)

app.get('/api/transaction', getAllTransactions );

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})