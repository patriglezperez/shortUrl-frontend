import React, { useState } from "react";

const Context = React.createContext({});
export default Context;

// const Context = React.createContext({});
// export function UserContextProvider({ children }) {
//   const [username, setUsername] = useState(() =>
//     window.sessionStorage.getItem("user")
//   );
//   return (
//     <Context.Provider value={{ username, setUsername }}>
//       {children}
//     </Context.Provider>
//   );
// }
// export default Context;
