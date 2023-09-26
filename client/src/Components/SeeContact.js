import axios from "axios";
import React, { useState, useEffect } from "react";

function SeeContact() {
  const [myData, setMydata] = useState([]);

  useEffect(() => {
     axios.get("http://localhost:5000/api/contact/details").then((data)=>{
      setMydata(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

  return <div>
     <h1 className='list-header'>Contact List</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
          <tbody>
            {
              myData.map((user)=>{
                return(
                  <tr>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.message}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
  </div>;
}

export default SeeContact;