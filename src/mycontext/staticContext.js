import React, { useState } from "react";

// const Context = React.createContext({});
// export default Context;

const MyContext = React.createContext({});
export function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {children}
    </MyContext.Provider>
  );
}
export default MyContext;
