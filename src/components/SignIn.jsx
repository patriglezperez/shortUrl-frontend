import NavBar from "./NavBar";
import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("this is submittt");
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
              <button type="submit">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignIn;

// function SignIn() {
//   return (
//     <div>
//       <h2>Log in</h2>
//       <div>
//         <form action="http://localhost:3001/api/users/signIn" method="POST">
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Example@gmail.com"
//               autoFocus
//             />
//           </div>
//           <div className="form-group">
//             <input type="password" name="password" placeholder="Password" />
//           </div>
//           <div className="form-group">
//             <button type="submit">SignIp</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default SignIn;
