import { createContext, useState } from "react";

export const DaysContext = createContext();

const DaysProvider = ({ children }) => {
  const [days, setDays] = useState(0);
  return (
    <DaysContext.Provider value={{ days, setDays }}>
      {children}
    </DaysContext.Provider>
  );
};
export default DaysProvider;
