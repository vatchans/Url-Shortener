import React from 'react'
import "../App.css"
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import { Outlet,NavLink } from 'react-router-dom'
function Data() {
    let [Fullurl, setFullurl] = useState('')
    let navigate=useNavigate()
    useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate('/signin')
    }
    },[])
    let handlesubmit = async() => {
        try{
    let res=await axios.post("https://url-shortener-u2jl.onrender.com/Shorturl",
        {
            // Fullurl
            url:Fullurl
        })
         if(res.status===200){
         }
         else if(res.status===500){
            alert(res.data)
         }
        }
        catch(error){
            console.log('error',error)
            alert(error.response.data.message)
        }
     setFullurl("")
    }
    return <>
    <Navbar></Navbar>
    
    <div className='Container-fluid input' style={{ "display": 'flex', "justifyContent": 'center' }}>
            <div className='row'>
                    <input type="text" placeholder="Enter a link" value={Fullurl} onChange={(e) => setFullurl(e.target.value)} />
                    <div className='col mt-4 text-center'>
               <NavLink to="Shortlink"> <button className="btn" onClick={()=>handlesubmit()}>
                    Submit
                </button>
                </NavLink>
                </div>
            </div>
            
        </div>
       
        <div  className="clip-icon" style={{ "display": 'flex', "justifyContent": 'center' }}>
        <img src="scissors.png"width="40px" alt="..."></img>
        </div>
        <div className="vl" style={{ "display": 'flex', "justifyContent": 'center' }}>

        </div>
        <Outlet/>
       
    </>
}

export default Data;
