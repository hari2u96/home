import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

function Axio() {
  // var id =11;
  const [users, setusers] = useState([]);
  const [name, setName] = useState("");
  // const [trigger,setTrigger]=useState(false)

  useEffect(() => {
    Axios.get(" https://jsonplaceholder.typicode.com/users/1").then((res) =>
      setusers(res.data)
    );
  }, []);

  // function postUser(){
  //     Axios.post('https://jsonplaceholder.typicode.com/users',{id:id++,name:name})
  //     .then(res => setusers([...users,res.data]))

  // }

  function updateUser() {
    Axios.put(`https://jsonplaceholder.typicode.com/users/${1}`, {
      name: name,
    }).then((res) => setusers(res.data));
  }

  return (
    <div>
      {/* {
              users.map((user,id) => {
              return (
              <div key={id}>
              <h3>{user.name}</h3>
              </div>
            )
            })
            } */}

      {users.name}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <button onClick={postUser}>Post</button> */}
      <button onClick={updateUser}>Update</button>
    </div>
  );
}

export default Axio;
