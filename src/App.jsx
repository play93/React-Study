import React from "react"
import { useState } from "react"
import Button from "./components/Button";
import User from "./components/User"



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

  const addUserHandler = ()=>{
    const newUser = {
      //추가 버튼이 눌렸을 때 => users state에 한 객체가 추가되면 됨!
      id: new Date().getTime(),
      age: Number(age),
      name: name,
    }

    console.log("newUser =>", newUser)
    console.log("age => ", age);
    console.log("name => ", name);

    //users에 push를 써서는 안됨! <불변성 유지를 위해서!>
    setUsers([...users, newUser])
    //기존의 user를 펼친 다음에 newUser를 넣어줌
  }

  const deleteUserHandler = (id) => {
    //삭제할 대상 id

    const deleteUsers = users.filter(function(user){
      return user.id != id
    })
    console.log(deleteUsers);

    setUsers(deleteUsers);

  }

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
    <Button 
      color="green"
      onClick={addUserHandler}>
        추가
    </Button>
    <div style={style}>
      {users

        //age가 25세 이상인 user는 제외하고 렌더링 해보기 (방법1)
        // .filter(function(u){ //=> filter를 사용
        // return u.age < 25 })

        .map(function(user) {
          //age가 25세 이상인 user는 제외하고 렌더링 해보기(방법2)  
          if (user.age >= 25){
            return null; //age가 25이상인 경우에는 여기서 null로 리턴되기(끝나기) 때문에 아래의 리턴까지 갈 수 없음! 
          }

          return (
            <User 
              key={user.id} 
              user={user}
              deleteUserHandler={deleteUserHandler}
            />
          )
        })
      }
    </div>
    </>
    //필터링된 값(age가 25보다 큰 값)은 state에는 남아있지만 표시되지 않음 => 아예 삭제된 게 아님!
    //filter. map. 조합은 많이 쓰이니 기억해두기
  )
}

export default App


