import { Alert } from "@mui/material";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewUser(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [newUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is submittt");
  };
  return (
    <>
      <NavBar />
      <div className="background">
        <Alert
          className={newUser === false ? "notVisible " : ""}
          severity="success"
        >
          Url successfully copied!
        </Alert>
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
              <div
                onClick={() => {
                  setNewUser(true);
                }}
              >
                <button type="submit" onSubmit={handleSubmit}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
