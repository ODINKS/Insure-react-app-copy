import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router";
const Payments = () => {

  const publicKey = "pk_test_50026f4b6d90461f96d53c9067cd64375d23c861";
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate()
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thank you for your patronage"),
      // navigate('./'),
      onClose: () => alert("Wait! Don't leave :("),
   
   

    
  };
  
const back =()=>{
navigate('/')
}
  return (
    <>
         <div className="text-center width-[80%] mx-auto">
      
      <div className="flex my-[5%] mx-auto w-[50%] bg-white shadow-md">
        <div className="item">
          <img className="h-[400px] w-full object-cover" src="https://tinyurl.com/48ffmsy8" alt="" />
         
        </div>

        <div className="bg-black-500 flex flex-col justify-center h-[450px] w-[50%]">
        <div className="p-5">
          <div className="flex flex-col mb-[20px]">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-[20px]">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-[20px]">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="checkout-field">
            <label>Amount</label>

            <select
              name=""
              id=""
              style={{ padding: "10px" }}
              onChange={(e) => setAmount(e.target.value)}
            >
              <option value="20000">20000</option>
              <option value="40000">40000</option>
              <option value="50000">50000</option>
              <option value="60000">60000</option>
            </select>
          </div>
          <PaystackButton
            className="cursor-pointer text-center bg-black text-white border-none rounded w-max py-2 px-3"
            style={{ marginTop: "0px" }}
            {...componentProps}
            
          />
        </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Payments