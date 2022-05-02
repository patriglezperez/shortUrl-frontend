import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:3001/api/users/login";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const user = await login(username, password);

      console.log(user, "user");

      setUser(user);
      setUsername("");
      setPassword("");
    } catch (e) {
      console.log({ error: "error in the login process" }); // Cambiar por un alert o error message midu
    }
  };

  // localStorage.setItem("username", username);
  // let firstName = localStorage.getItem("username");
  // console.log(firstName, "firstName");

  const login = async (username, password) => {
    const { data } = await axios.post(baseUrl, {
      username,
      password,
    });
    return data;
  };

  return (
    <>
      <NavBar />
      <div>
        <h2>Account Register</h2>
        <div>
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                name="Usename"
                placeholder="Name"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
              <button
                type="submit"
                onClick={
                  user
                    ? () => {
                        navigate(`/home`, {
                          state: { user: user },
                        });
                      }
                    : null
                }
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignIn;
