import React, { useState } from "react";

const StaticContext = React.createContext({});

export function StaticContextProvider({ children }) {
  const [copied, setCopied] = useState(false);

  return (
    <StaticContext.Provider value={{ copied, setCopied }}>
      {children}
    </StaticContext.Provider>
  );
}
export default StaticContext;
