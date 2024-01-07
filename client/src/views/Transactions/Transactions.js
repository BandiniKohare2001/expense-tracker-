import React, { useEffect, useState } from "react";
import "./Transactions.css"
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import showToast from "crunchy-toast"
import Header from "../../components/Header/Header";
export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [creditSum, setCreditSum] = useState(0);
    const [debitSum, setDebitSum] = useState(0);
    const [user, setUser] = useState({});
    const [balance, setBalance] = useState(0)
    const CATEGORY_EMOJI_MAP = {
        "food": "🍔",
        "entertainement": "📺",
        "shopping": "🛍",
        "rent": "🏡",
        "travel": "✈",
        "education": "🏫",
        "salary": "💰",
        "freelancing": "💻",
        "side-hussle": "👔",
        "other": "🤷🏻‍♂️"
    }

    const loadTransactions = async () => {
        const response = await axios.get("/api/transactions");
        const transactionsData = response?.data?.data;

        let totalCredit = 0;
        let totalDebit = 0;
        let totalBalance =0

        transactionsData.forEach((transaction) => {
            if (transaction.type === "credit") {
                totalCredit += transaction.amount;
            } else {
                totalDebit += transaction.amount;
            }
        })

        setCreditSum(totalCredit);
        setDebitSum(totalDebit);
setBalance(totalCredit-totalDebit)
        console.log(transactionsData);
        setTransactions(transactionsData);
    };

    useEffect(() => {
        loadTransactions();
    }, []);

    const deleteUserTransaction = async(id)=>{
        const response = await axios.delete(`/api/transactions/${id}`);
    
        if(response?.data?.success){
          showToast(response?.data?.message,'denger','3000');
          loadTransactions();
        }
      }
      const updateTransaction = async(id)=>{
        window.location.href=`/updateTransaction/${id}`
      }



    useEffect(() => {
        const userstorageData = JSON.parse(localStorage.getItem('expenseuser') || '{}');

        if (userstorageData?.email) {
            setUser(userstorageData);
        }
        else {
            showToast('you are not logged in!', 'danger', 1000);
            window.location.href = '/login'
        }

    }, [])
    return (
        <>

            <div>
                <Navbar />
                <div className="blance-container"><h3 className="credit-amount top">Credit =  {creditSum}</h3>
                <h3 className="debit-amount top">Debit =  {debitSum}</h3>
                <h3 className="available-balance top">Available Balance = {balance}</h3></div>
                <div className="transaction-history-table">
                    <Header />
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
                                        <div className="date">
                                            {
                                                type === "debit" ? "Debited" : "Credited"
                                            }
                                        </div></span>
                                        
                                      <span className={`amount ${type === "debit" ? "debit-amount" : "credit-amount"}`}>  <div className="date">
                                            {
                                                type === "debit" ? "-" : "+"
                                            }
                                            {amount}</div>
                                    </span>
                                    <div className="date">{date} </div>
                                    <div className="date"> {time}</div>


                                    <div className="date"> <span className="transaction-category">
                                        {CATEGORY_EMOJI_MAP[category]}
                                        {category}</span></div>

                                    <div className="date">{description}</div>

                                    <div className="date">
                                    <p className='edit-icon'
                                            onClick={() => {
                                                updateTransaction(_id)
                                            }}
                                        >✒️ Edit </p>
                                    </div>
                                       <div className="date"> <p className='edit-icon' onClick={() => { deleteUserTransaction(_id) }} >🗑️ Delete</p></div>
                                </div>


                            )
                        }
                        )
                    }
                </div>
            </div >
        </>
    )
}