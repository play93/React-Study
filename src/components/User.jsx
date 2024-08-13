import Button from "./Button";

//자식컴포넌트 User
const User = ({user, deleteUserHandler}) => {
  
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
  }

  const { age, name, id } = user;

  return (
  <div style={squareStyle}>
    <div>
      {age}살-{name}
    </div>
    <div>
      <Button 
        color="red"
        onClick={()=>deleteUserHandler(id)}>삭제</Button> 
    </div>
  </div>
  //여기선 div로 하지만 시맨틱태그를 이용해야함
  //가독성도 좋지 않고 seo관점에서도 좋지 않기때문에
  //App컴포넌트에서 delete를 할 수 있는 함수를 만든 후 User컴포넌트에 내려줌
)
}

export default User;