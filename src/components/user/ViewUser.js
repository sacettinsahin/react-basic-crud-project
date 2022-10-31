import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios.get(`http://localhost:4000/users/${id}`).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      <div className="wrapper-view">
        <div className="">
          <h3>Name : {data.name}</h3>
          <h3>Username: {data.username}</h3>
          <h3>Email: {data.email}</h3>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
