import React,{useState , useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListEvents() {

  const [myData, setMydata] = useState([]);

  useEffect(() => {
     axios.get("http://localhost:5000/api/events/details").then((data)=>{
      setMydata(data.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

  const deleteData =(id)=>{
    axios.delete(`http://localhost:5000/api/events/details/${id}`)
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
  }

  return (
    <div>
           <h1 className='list-header'>Event List</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Start</th>
          <th>End</th>
          <th>Location</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>
          <tbody>
            {
              myData.map((user)=>{
                return(
                  <tr>
                    <td>{user.title}</td>
                    <td>{user.start}</td>
                    <td>{user.end}</td>
                    <td>{user.location}</td>
                    <td>{user.note}</td>
                    <td>
                    <Link to={`/Control/Admin/Page/ControlEvant/ChangeEvents/${user._id}`}><button>Update</button></Link>
                      <button onClick={()=>deleteData(user._id)}>Delete</button>
                    </td>
                    
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default ListEvents
