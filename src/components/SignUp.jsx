import { useState } from "react";
import { Alert } from "@mui/material";
import NavBar from "./NavBar";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is submittt");
  };
  return (
    <>
      <NavBar />
      <div>
        <h2>Account Register</h2>
        <div>
          <form action="http://localhost:3001/api/users/signUp" method="POST">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" onSubmit={handleSubmit}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;
