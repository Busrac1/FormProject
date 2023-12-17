import React, { useState } from 'react'
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPostControl = () => {
  const navigate= useNavigate()
  // class modelin örn oluşturma
  const model= new AddPostModel()
  // console.log(model)

  const [form,setForm]=useState(model.state)
  // console.log(form)

  
  const onInputChange=(key, e)=>{
 /**
     * setForm metodunu state güncellemek için çağırdık
     * içerisinde spread operatör yarıdmı ile tüm form  objesini aldık
     * daha sonra köşeli parantez ile bir obje keyi gelecenii belirttik
     * ve keye karışık yine dışardan kelen vallueyi ekledik
     */
  setForm({...form, [key]:e.target.value})
    // state manipüle edemediğimiz içi]n doğrudan , kopyasını oluşturdujk

  }

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!form.user || !form.text) {
      alert("Tüm Doldurunuz");
      return;
    }
    // post isteği yaparken yükleyeceğimiz ekleme -form.yenilensn
    axios
    .post("http://localhost:3005/posts",form)
    .then((res)=> navigate('/'))
    .catch((err)=> console.log(err))
  }


  return (
<AddPostView onInputChange={onInputChange}  handleSubmit={handleSubmit}/>
  )
}

export default AddPostControl