"use client";
import React from "react";
import { createContext,useContext,useState } from "react";
const DataContext = createContext();
const DataContextProvider = ({children}) => {
    const [selected, setSelected] = useState("0");
    const [selectedChain, setSelectedChain] = useState("Select Chain");
    
  return <DataContext.Provider value={{selected,setSelected,setSelectedChain,selectedChain}}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
    return useContext(DataContext);
}
export default DataContextProvider;
