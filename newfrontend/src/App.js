// import React,{useEffect, useState} from 'react'
// import axios from 'axios';
// const App = () => {
//   const[accountId,setAccountId] = useState("");
//   const[accountName,setAccountName] = useState("");
//   const[groupId,setgroupId] = useState("");
//   const[subGroupId,setsubGroupId] = useState("");
//   const[opening,setopening] = useState("");
//   const[drOrCr,setdrOrCr] = useState("");


//   const [transactionType, setTransactionType] = useState("DR"); // Default to "DR"
//   const [amount, setAmount] = useState("");

//   const handleTransactionTypeChange = (type) => {
//     setTransactionType(type);
//   };


// const handleClick = () => {

//   let data = JSON.stringify({
//     accountId: accountId,
//     accountName: accountName,
//     groupId: groupId,
//     subGroupId: subGroupId,
//     opening: opening,
//     drOrCr: drOrCr,
//     "typeCode": "Balance Sheet",
//     "createdAt": "2025-02-17",
//     "updatedAt": "2025-02-17"
//   });

//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'http://127.0.0.1:8001/Account',
//     headers: { 
//       'Content-Type': 'application/json'
//     },
//     data : data
//   };

//   axios.request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// }
// const [accounts,setAccounts]=useState([])
// const getAccounts =()=>{

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'http://127.0.0.1:8001/Account',
//   headers: { }
// };

// axios.request(config)
// .then((response) => {
//   console.log((response.data));
//   setAccounts((response.data))
// })
// .catch((error) => {
//   console.log(error);
// });

// }
// useEffect(() => {
//   getAccounts()
// }, []);


// // const [data,setData]=useState([])
// // const getData=()=>{


// // let config = {
// //   method: 'get',
// //   maxBodyLength: Infinity,
// //   url: 'http://127.0.0.1:8001/Account/',
// //   headers: { }
// // };

// // axios.request(config)
// // .then((response) => {
// //   console.log(response.data);
// // })
// // .catch((error) => {
// //   console.log(error);
// // });

// // }
//   return (

// <>
//   <div style={{ textAlign: 'center' }}>
//   <div>
//     <h2>Create a new AccountId</h2>
//     <input 
//       type="number" 
//       placeholder="Enter The AccountId" 
//       onChange={(e) => setAccountId(e.target.value)} 
//     />

//     <h2>Account Holder Name</h2>
//     <p> Note:The Name must As per Your Adhar Identity Card</p>

//     <input 
//       type="text" 
//       placeholder="Account Holder Name" 
//       onChange={(e) => setAccountName(e.target.value)} 
//     />

// <h3>Enter Your groupId</h3>
//     <input 
//       type="number" 
//       placeholder="groupId" 
//       onChange={(e) => setgroupId(e.target.value)} 
//     />
// <h4>Enter Your subGroupId</h4>
// <p> Note: "The Sub Group Id is must in Number"  </p>
// <input 
//       type="number" 
//       placeholder="setsubGroupId" 
//       onChange={(e) => setsubGroupId(e.target.value)} 
//     />

// <h4>Enter Your Diposit Amount</h4>
// <p>Note: Once You Deposit Amount You Will Not Abel To Wethdrow Within Six Month And </p>
// <input 
//       type="number" 
//       placeholder="setsubGroupId" 
//       onChange={(e) => setopening(e.target.value)} 
//     />

// <h6>Opening Amount</h6>
//       <p>Note: Deposit Amount Should Not Be Less Than 5000</p>

//       <div>
//         <button
//           onClick={() => handleTransactionTypeChange("DR")}
//           style={{
//             backgroundColor: transactionType === "DR" ? "blue" : "gray",
//             color: "white",
//             marginRight: "10px",
//           }}
//         >
//           DR
//         </button>

//         <button
//           onClick={() => handleTransactionTypeChange("CR")}
//           style={{
//             backgroundColor: transactionType === "CR" ? "blue" : "gray",
//             color: "white",
//           }}
//         >
//           CR
//         </button>
//       </div>

//       <input
//         type="number"
//         placeholder="Enter Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         min="5000"
//       />

//       {amount && amount < 5000 && (
//         <p style={{ color: "red" }}>Amount should not be less than 5000</p>
//       )}
//   </div>

//   <button onClick={handleClick} style={{ marginTop: '10px' }}>Create Your Account</button>
// </div>

// {accounts.map((account, index) => (
//   <div key={index}>
//     <p>ID: {account._id}</p>
//     <p>Name: {account.accountName}</p>

// </div>

// ))}

// </>
//   );







// export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [accountId, setAccountId] = useState("");
  const [accountName, setAccountName] = useState("");
  const [groupId, setgroupId] = useState("");
  const [subGroupId, setsubGroupId] = useState("");
  const [opening, setopening] = useState("");
  const [drOrCr, setdrOrCr] = useState("");
  const [typeCode, setTypeCode] = useState("");
  const [createdAt, setcreatedAt] = useState("");

  const [transactionType, setTransactionType] = useState("DR"); // Default to "DR"
  const [amount, setAmount] = useState("");
  const handleDateChange = (e) => {
    const date = e.target.value;
    if (date) {
      const formattedDate = date.split("-").reverse().join("-");
      setcreatedAt(formattedDate);
    }
  };


  const handleTimeChange = (e) => {
    let [hours, minutes] = e.target.value.split(":");
    let period = "AM";

    hours = parseInt(hours, 10);
    if (hours >= 12) {
      period = "PM";
      if (hours > 12) hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }

    const formattedTime = `${hours}:${minutes} ${period}`;

    setcreatedAt((prev) => (prev ? `${prev} ${formattedTime}` : formattedTime));
  };
  const handleClick = () => {
    let data = JSON.stringify({
      accountId: accountId,
      accountName: accountName,
      groupId: groupId,
      subGroupId: subGroupId,
      opening: opening,
      drOrCr: drOrCr,
      typeCode: typeCode,
     
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8001/Account",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [accounts, setAccounts] = useState([]);

  const getAccounts = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8001/Account",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setAccounts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAccounts();
  }, []);


  return (
    <>
      <div style={{ textAlign: "start" }}>
        <div>
          <h2>Create a new AccountId</h2>
          <input
            type="number"
            placeholder="Enter The AccountId"
            onChange={(e) => setAccountId(e.target.value)}
          />

          <h2>Account Holder Name</h2>
          <p>Note: The Name must be as per Your Aadhaar Identity Card</p>

          <input
            type="text"
            placeholder="Account Holder Name"
            onChange={(e) => setAccountName(e.target.value)}
          />

          <h3>Enter Your groupId</h3>
          <input
            type="number"
            placeholder="groupId"
            onChange={(e) => setgroupId(e.target.value)}
          />
          <h4>Enter Your subGroupId</h4>
          <p>Note: "The Sub Group Id must be a Number"</p>
          <input
            type="number"
            placeholder="subGroupId"
            onChange={(e) => setsubGroupId(e.target.value)}
          />

          <h4>Enter Your Deposit Amount</h4>
          <p>
            Note: Once You Deposit Amount, You Will Not Be Able To Withdraw
            Within Six Months
          </p>
          <input
            type="number"
            placeholder="Deposit Amount"
            onChange={(e) => setopening(e.target.value)}
          />

          <h6>Opening Amount</h6>
          <p>Note: Deposit Amount Should Not Be Less Than 5000</p>

          {/* <div>
          <button
            onClick={() => handleTransactionTypeChange("DR")}
            style={{
              backgroundColor: transactionType === "DR" ? "blue" : "gray",
              color: "white",
              marginRight: "10px",
            }}
          >
            DR
          </button>
  


  
          <button
            onClick={() => handleTransactionTypeChange("CR")}
            style={{
              backgroundColor: transactionType === "CR" ? "blue" : "gray",
              color: "white",
            }}
          >
            CR
          </button>
        </div> */}

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="5000"
          />

          {amount && amount < 5000 && (
            <p style={{ color: "red" }}>Amount should not be less than 5000</p>
          )}

          <h6>type code</h6>
          <p>Note: the type code must be in string format</p>


          <select value={typeCode} onChange={(e) => setTypeCode(e.target.value)}>
            <option value="">Select Type Code</option>
            <option value="Balance Sheet">Balance Sheet</option>
            <option value="Profit and Loss Account">Profit and Loss Account</option>
            <option value="Trading Account">Trading Account</option>
          </select>

          



        </div>

        <button onClick={handleClick} style={{ marginTop: "10px" }}>
          Create Your Account
        </button>
      </div>

      {accounts.map((account, index) => (
        <div key={index}>
          <p>ID: {account._id}</p>
          <p>Name: {account.accountName}</p>
        </div>
      ))}
    </>
  );
}

export default App;
