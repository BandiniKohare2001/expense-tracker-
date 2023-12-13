import { responder } from "../util.js";
import Transaction from "./../model/transaction.js";

const postApiTransaction = async (req, res) => {
    const {  amount, type, description, category } = req.body;

    const transaction = new Transaction({
       amount, 
       type, 
       description, 
       category
    })
    try {
        const savedTransaction = await transaction.save();
        return responder({
            res,
            success: true,
            data: savedTransaction,
            message: 'transaction successfull'

        })
       
    } catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        });
    }
}

const getAllTransactions =  async (req, res) => {
    const allTransactions = await Transaction.find();
    return responder({
        res,
        success: true,
        message: " Successfully fetch All Transactions",
        data: allTransactions

    });
}
export { postApiTransaction, getAllTransactions };