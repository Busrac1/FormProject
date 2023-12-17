import React, { useState } from "react";
import PopUpControl from "../../components/PopUp/PopUpControl";
import Loading from './../../components/Loading';


const ListPostView = ({data,showPopUp,setShowPopUp}) => {
  const [userName, setUserName] = useState(""); 
  return (
    <div className="container">
      {!data && <Loading/>}
      {data.map((post) => (
        <div key={post.id}>
          <div className="post">
            <div className="info">
              <h3>{post.title}</h3>
              <p onClick={()=> 
                { setShowPopUp(true);
                 setUserName(post.user); }}
                 >{post.user}</p>
            </div>
            <p className="text">{post.text}</p>
          </div>
        </div>
      ))}

         {showPopUp&& <PopUpControl setShowPopUp={setShowPopUp} userName= {userName }  />}     
    </div>
  );
};

export default ListPostView;
