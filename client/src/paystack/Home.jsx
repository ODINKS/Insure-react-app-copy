import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

import { useNavigate } from "react-router";

const Home = () => {
    const publicKey = "pk_test_50026f4b6d90461f96d53c9067cd64375d23c861";
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const amount=50000 
    const navigate = useNavigate()
    const componentProps = {
      email,
      amount:amount*100,
    
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
        // navigate('./'),
        onClose: () => alert("Wait! Don't leave :("),
     
     
  
      
    };
    
  
    // const createInvoice= ()=>{
  
    // }
  
    const checkCustomerExists = async (email_or_code) => {
      try {
        const result = await fetch(
          `https://api.paystack.co/customer/${email_or_code}`,
  
          {
            headers: {
                Authorization:
                "Bearer sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
                "Content-Type": "application/json"
            },
          }
          
        );
        console.log(result)
        const customer = result.data.data.customer_code
          console.log(customer)
      if (customer) {
        navigate(`../Invoice?customer=${customer}`);
      }
       
        console.log("worked");
      } catch (error) {
        console.log(error)
        navigate("./Customer");
      }
  
  
    };




  return (
    <>
              <div className="text-center width-[80%] mx-auto">
            <div className="heading">
            <h3 className="text-2xl my-3">INSURE</h3>
                        </div>

      <div className="flex my-[5%] mx-auto w-[50%] bg-white shadow-md">
        <div className="w-[50%] relative bg-slate-500">
        
          <img className="h-[400px] w-full object-cover" src='https://tinyurl.com/48ffmsy8' alt="" />
        
        </div>

        <div className="bg-black-500 flex flex-col justify-center h-[450px] w-[50%]">
        <div className="p-5">
          <div className="flex flex-col mb-4">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
            
          <div className="flex flex-col mb-4">
            <label>Amount</label>
           <p style={{border:"1px solid white", borderRadius:"5px", padding:"7px", textAlign:"left" , marginTop:"2px"}}>{amount}</p>
            
          </div>
          <PaystackButton
            className="paystack-button"
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

export default Home