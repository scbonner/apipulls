import * as React from "react";
import "./App.css";


export default function App() {
  const [users, setUsers] = React.useState([]);   //line represents state, setUsers represents action take on state
//   const [isLoading,setIsLoading] = React.usState(true)
  const f = async () => {
  const res = await fetch("https://reqres.in/api/users/");

  const json = await res.json();
  // console.log(json);
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  
  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <br />
      <hr />
      <div className="flex">
        {users.length &&
          users.map((user) => {
              
            return (
                
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
