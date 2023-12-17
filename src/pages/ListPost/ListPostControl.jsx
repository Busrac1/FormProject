import React, { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";

const ListPostControl = () => {
  const [userName, setUserName] = useState([]);
  const [data, setData] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3005/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <ListPostView
      userName={userName}
      setUserName={setUserName}
      data={data}
      showPopUp={showPopUp}
      setShowPopUp={setShowPopUp}
    />
  );
};

export default ListPostControl;
