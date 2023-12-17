import React, { useEffect, useState } from 'react';
import PopUpView from './PopUpView';
import axios from 'axios';

const PopUpControl = ({ setShowPopUp, userName }) => {
  const[data,setDate]= useState([])

  useEffect(()=> {
    axios.get( `http://localhost:3005/posts?user=$(userName)`)
    .then((res)=>setDate(res.data))
    .catch((err)=> console.log(err))
  }, [])
  return (
    <PopUpView setShowPopUp={setShowPopUp}  userName={userName} data={data}/>
  );
}

export default PopUpControl;
