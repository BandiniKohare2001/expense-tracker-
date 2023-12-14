import React, { useEffect, useState } from 'react'
import './../AddTransaction/AddTransaction.css';
import axios from "axios";
import Navbar from "./../../components/Navbar/Navbar";
import showToast from 'crunchy-toast';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

function UpdateTransaction() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const { id } = useParams();

  const fetchTransaction = async () => {
    const response = await axios.get(`/api/transactions/${id}`)
    const { amount, type, description, category } = response.data.data;

    setAmount(amount)
    setType(type)
    setDescription(description)
    setCategory(category)
  }
  useEffect(() => {
    fetchTransaction()
  }, [])

  const UpdateTransaction = async () => {
    const response = await axios.put(`/api/transactions/${id}`, {
      amount,
      type,
      description,
      category
    })

    if (response?.data?.data) {
      const successMessage = 'Transaction updated successfully';
      showToast(successMessage, 'success', '3000');
      window.location.href = '/transactions'
    }

    setAmount('')
    setCategory('')
    setDescription('')
    setType('')

  }

  // <>
  // id= {id}
  //   </>

  return (
    <>


      <Navbar />
      <form>
        <div className="input-box-container">
          <h1 className="title">Update Transactions</h1>

          <div>

          <label className='ms-3 type-text'>Type: </label>
            <div className='type-container'>
              <input
                type='radio'
                className='gender-type'
                value="credit"
                checked={type === "credit"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setType(e.target.value)
                  }
                }}
              /> <label className='type-text'>Credit</label>
<br />
              <input
                type='radio'
                className='gender-type'
                name="amounttype"
                value="debit"
                checked={type === "debit"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setType(e.target.value)
                  }
                }}
              /> <label className='type-text'>Debit</label>
            </div><br />
            <input
              type='number'
              placeholder='enter Amount'
              className="input-box"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            /><br />
            <br />
            <div className=''>
              <label className='cetgory-text'>Select Category :</label><br />
              <select
                className="input-box"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}>
                <option >select category here</option>
                <option value="food">Food</option>
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
            </div>
            <br />
            <label className='cetgory-text'>Add Description:</label><br />
            <input
              type='text'
              placeholder='enter description'
              className="input-box"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
<br /><br />
            <button
              type='button'
              className='signup-btn'
              onClick={UpdateTransaction}>Update</button>
          </div>
        </div>

      </form>

      <Footer />
    </>
  )
}
export default UpdateTransaction;
