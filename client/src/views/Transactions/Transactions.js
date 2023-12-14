import React, { useEffect, useState } from "react";
import "./Transactions.css"
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [creditSum, setCreditSum] = useState (0);
    const [debitSum, setDebitSum] = useState(0);
    const CATEGORY_EMOJI_MAP = {
        "food": "🍔",
        "entertainment": "🎮",
        "rent":"🏠",
        "shopping": "🛍️",
        "salary":"💰",
        "travel": "✈️",
        "freelancing":"💻",
        "other": "🤷🏻‍♂️"
    }

    const loadTransactions = async () => {
        const response = await axios.get("/api/transaction");
        const transactionsData = response?.data?.data;

        let totalCredit = 0;
        let totalDebit = 0;

        transactionsData.forEach((transaction) => {
            if(transaction.type==="credit"){
            totalCredit += transaction.amount;
            }else{
                totalDebit += transaction.amount;  
            }
        })
        setCreditSum(totalCredit);
        setDebitSum(totalDebit)
        console.log(transactionsData);
        setTransactions(transactionsData);
    };

    useEffect(() => {
        loadTransactions();
    }, [])
    return (
        <>

            <div>
                <Navbar />
                <h2>Credit: {creditSum}</h2>
                    <h2>Debit: {debitSum}</h2>
                <div className="transaction-history-table">
               
                    {
                   
                    transactions?.map((transaction, index) => {
                        const { _id, amount, type, description, category,
                            createdAt,
                        } = transaction;

                      
                        const date = new Date(createdAt).toLocaleDateString();
                        const time = new Date(createdAt).toLocaleTimeString();
                        return (

                            <div key={index} className="transaction-row">
                                <span className={`amount ${type === "debit" ? "debit-amount" : "credit-amount"}`}>
                                    {
                                        type === "debit" ? "-" : "+"
                                    }
                                    {amount}{" "}
                                </span>
                                {
                                    type === "debit" ? "Debited" : "Credited"
                                }on {date} at {time}

                                <span className="transaction-category">
                                    {CATEGORY_EMOJI_MAP[category]}
                                    {category}</span>
                                    <hr />
                                    {description}
                            </div>


                        )
                    }
                    )
                }
                </div>
            </div>
        </>
    )
}