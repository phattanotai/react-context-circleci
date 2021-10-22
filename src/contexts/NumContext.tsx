import React, { useState, useEffect, createContext } from "react";
import { userDataType } from "../types/UserType";
interface NumContextProps {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

const NumContext = createContext({} as NumContextProps);

export const NumProvider: React.FC = (props) => {
  const numLocal = localStorage.getItem("num");

  const [num, setNum] = useState<number>(numLocal ? JSON.parse(numLocal) : 0);

  useEffect(() => {
    localStorage.setItem("num", JSON.stringify(num));
  }, [num]);

  return (
    <NumContext.Provider
      value={{
        num,
        setNum,
      }}
    >
      {props.children}
    </NumContext.Provider>
  );
};

export default NumContext;
