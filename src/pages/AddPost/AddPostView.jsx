 import React from 'react'
 
 const AddPostView = ({onInputChange, handleSubmit}) => {
   return (
  <form onSubmit={handleSubmit}>
    <h2>Yeni Gönderi Ekle</h2>
    <fieldset>
      <label htmlFor="">kullanıcı adı</label>
      <input type="text" placeholder='örn:ahmet' onChange={(e)=> onInputChange('user', e)}/>
    </fieldset>

    <fieldset>
      <label htmlFor="">Başlık</label>
      <input type="text" placeholder='örn. MVC mimarisi' onChange={(e)=> onInputChange('title', e)}/>
    </fieldset>

    <fieldset>
      <label htmlFor="">Açıklama</label>
      <textarea placeholder='açıklamayı giriniz'  onChange={(e)=> onInputChange('text', e)}/>
    </fieldset>

    <button>Gönder</button>
  </form>
   )
 }
 
 export default AddPostView