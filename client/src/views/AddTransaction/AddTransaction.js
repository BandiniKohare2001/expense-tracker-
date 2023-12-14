import { useState } from "react"
import axios from "axios"
import "./AddTransaction.css"
import Navbar from "../../components/Navbar/Navbar"

const AddTransaction = () => {
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("cradit")
    const [description, setDescription] = useState("")
    const [catagory, setCatagory] = useState("")

    const addTransaction = async () => {
        const userStorage = JSON.parse(localStorage.getItem('user'));

        try {
            const response = await axios.post("/api/transactions", {
                user: userStorage?._id,
                amount: amount,
                type: type,
                description: description,
                catagory: catagory
            })

            // alert(response?.data?.massage)
            if (response?.data?.success) {
                window.location.href = "/transactions"
            }
        }
        catch (err) {
            alert(err.massage)
        }


    }


    return (
        <>
            <Navbar />
            <form>
                <div className="input-box-container">
                    <h1 className="title">Add Expences</h1>
                    <div className="type-input">
                        Type :
                        <br />

                        <input
                            type="radio"
                            placeholder="Type"
                            value="credit"
                            name="type"
                            checked={type === "credit"}
                            onChange={() => setType("credit")}
                        />

                        Credit<br />
                        <input
                            type="radio"
                            placeholder="Type"
                            value="debit"
                            name="type"
                            checked={type === "debit"}
                            onChange={() => setType("debit")}
                        />
                        Debit
                    </div><br />
                    Add amount<br />
                    
                    <input type="number" placeholder="Amount" className="input-box"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                    /><br />
                    <br />



                    Select  Catagory
                    <br />
                    <select
                        className={`select-box ${catagory === "" ? "" : "text-black"}`}
                        value={catagory}
                        onChange={(e) => {
                            setCatagory(e.target.value)
                        }}
                    ><br />
                        <br />


                        <option  >Select </option>
                        <option value="food" >Food</option>
                        <option value="entertainement">Entertainment</option>
                        <option value="shopping">Shopping</option>
                        <option value="rent">Rent</option>
                        <option value="travel">Travel</option>
                        <option value="education">Education</option>
                        <option value="salary">Salary</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="side-hussle">Side-hussle</option>
                        <option value="other">Other</option>
                    </select>
                    

                    <br />
                    <br />
                    Add Description<br />
                    <input type="text" placeholder="Description" className="input-box"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    /><br />
                    <br />


                    <button type="button" className="signup-btn"
                        onClick={addTransaction}> Add Transaction </button>

                </div>
            </form>
        </>
    )
}

export default AddTransaction;
