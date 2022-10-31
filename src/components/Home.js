import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios.get("http://localhost:4000/users").then((res) => {
      setData(res.data);
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/users/${id}`, id).then((res) => {
      alert("deleted!");
    });
    getUser();
  };

  return (
    <div>
      <h1 className="text-center mt-5">Users Data</h1>
      <div className="container">
        <table class="table table-striped">
          <thead>
            <tr className="text-center">
              <th className="col-1">#</th>
              <th className="col-3">Name</th>
              <th className="col-3">Username</th>
              <th className="col-2">Email</th>
              <th className="col-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user, index) => (
                <tr key={index} className="text-center">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/users/${user.id}`}
                      className="btn btn-secondary mx-3"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-danger mx-3"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
