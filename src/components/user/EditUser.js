import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${id}`).then((res) => {
      setName(res.data.name);
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    username: username,
    email: email,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:4000/users/${id}`, data).then(navigate("/"));
  }

  return (
    <div>
      <div className="wrapper">
        <h2 className="text-center pt-5">User Details</h2>

        <form className="form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button className="btn btn-success" type="submit" onClick={Update}>
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
