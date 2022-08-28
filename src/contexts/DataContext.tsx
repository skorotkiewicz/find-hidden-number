import React, { useContext, useState } from "react";

const DataContext = React.createContext("");

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }: any) {
  const [opened, setOpened] = useState([]);
  const [status, setStatus] = useState(0);
  const [searchNum, setSearchNum] = useState(0);

  const value: any = {
    opened,
    setOpened,
    status,
    setStatus,
    searchNum,
    setSearchNum,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
