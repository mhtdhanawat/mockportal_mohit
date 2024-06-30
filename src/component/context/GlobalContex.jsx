import { useEffect, useState } from "react";
import { createContext } from "react";
// import { Link, useNavigate } from "react-router-dom";


export const TokenConstextApi = createContext(null);

export const GlobalContextApi = ({ children }) => {

//   const navigate = useNavigate()


const [data , setData] = useState("")
const [ token , setToken] = useState("")
const [csId , setCsId] = useState("")
const [customer_id , setCoustomerId] = useState("")

console.log(csId);
console.log(customer_id);



 useEffect(()=>{
    let ccc = localStorage.getItem("customer_id")
    setCoustomerId(ccc)
 })


// const handleLogOut = ()=>{
//     localStorage.removeItem("sessToken")
//     window.location.href = "/";
// }


const values = {
data ,
setData,
setToken,
token,
csId,
setCsId,
customer_id ,
 setCoustomerId
// handleLogOut
}

return <TokenConstextApi.Provider value={values}>{children}</TokenConstextApi.Provider>

};


