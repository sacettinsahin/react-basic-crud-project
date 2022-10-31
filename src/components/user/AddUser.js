import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleFormSubmit = async (e) => {
    let response = await axios
      .post("http://localhost:4000/users", formData)
      .then(navigate("/"));
  };

  return (
    <div>
      <h2 className="text-center pt-5">Add User</h2>
      <form className="form">
        <input
          type="text"
          value={formData.name}
          placeholder="Enter your name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />{" "}
        <br />
        <input
          type="text"
          value={formData.username}
          placeholder="Enter your username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />{" "}
        <br />
        <input
          type="text"
          value={formData.email}
          placeholder="Enter your email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-success"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
