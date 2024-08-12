import React from "react"
import { useState } from "react"

const App = () => {
  const style ={
    display:"flex",
    gap:"12px",
    padding:"50px",
  }


  const [users, setUsers] = useState([
    {
      id: new Date().getTime(),
      age: 30,
      name: "송중기"
    },
    {
      id: new Date().getTime() +1,
      age: 24,
      name: "송강"
    },
    {
      id: new Date().getTime() +2,
      age: 21,
      name: "김유정"
    },
    {
      id: new Date().getTime() +3,
      age: 29,
      name: "구교환"
    }
  ]);

  console.log(users);

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
    <input 
      type="number"
      value={age}
      onChange={(e) => {
        setAge(e.target.value);
      }}  
    />
    <input 
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}  
    />
    <button 
    onClick={()=>{
      console.log("age => ", age);
      console.log("name => ", name);

      const newUser = {
        id: new Date().getTime(),
        age: age,
        name: name,
      }
    }}>
      추가
    </button>
    <div style={style}>
      {users.map(function(user) {
          return (
            <User key={user.id} user={user}/>
          )
        })
      }
    </div>
    </>
  )
}

export default App

const User = ({user}) => {
  
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
  }

  const { age, name } = user;

  return (
  <div style={squareStyle}>
    {age}살-{name}
  </div>
)
}
