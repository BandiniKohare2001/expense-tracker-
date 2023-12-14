import { responder } from "../util.js";
import Transaction from "./../model/transaction.js";

const postApiTransaction = async (req, res) => {
    const { user, amount, type, description, category } = req.body;

    const transaction = new Transaction({
        user,
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

const getAllTransactions = async (req, res) => {
    const allTransactions = await Transaction.find();
    return responder({
        res,
        success: true,
        message: " Successfully fetch All Transactions",
        data: allTransactions

    });
}
const deleteTransaction = async (req, res) => {
    const { id } = req.params;

    await Transaction.deleteOne({ _id: id })

    res.json({
        success: "true",
        message: "Transaction delete succesfully..!"
    })
}

const editTransation = async (req, res) => {
    const { id } = req.params

    const { amount, type, description, category } = req.body;

    await Transaction.updateOne({ _id: id },
        {
            $set: {
                amount, description, type, category
            }
        })

    const updatedTransaction = await Transaction.findOne({ _id: id })


    res.json({
        success: "true",
        data: updatedTransaction,
        message: "Transaction update succesfully..!"
    })
}

const displayedit = async (req, res) => {
    const { id } = req.params

    const idTransaction = await Transaction.findOne({ _id: id })
    res.json({
        success: "true",
        data: idTransaction,
        message: "Transaction display succesfully..!"
    })
}

export { postApiTransaction, getAllTransactions, deleteTransaction, editTransation, displayedit };