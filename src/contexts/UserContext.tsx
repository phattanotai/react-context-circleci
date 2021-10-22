import React, { useState, useEffect, createContext } from "react";
import { userDataType } from "../types/UserType";
interface UserContextProps {
  isLogin: Boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<Boolean>>;
  accessToken: String;
  setAccessToken: React.Dispatch<React.SetStateAction<String>>;
  userData: userDataType;
  setUserData: React.Dispatch<React.SetStateAction<userDataType>>;
}

const UserContext = createContext({} as UserContextProps);

export const UserProvider: React.FC = (props) => {
  const isLoginKey = "isLogin";
  const accessTokenKey = "accessToken";
  const userDataKey = "userData";

  const isLoginLocal = localStorage.getItem(isLoginKey);
  const accessTokenLocal = localStorage.getItem(accessTokenKey);
  const userDataLocal = localStorage.getItem(userDataKey);

  const [isLogin, setIsLogin] = useState<Boolean>(
    isLoginLocal ? JSON.parse(isLoginLocal) : false
  );
  const [accessToken, setAccessToken] = useState<String>(
    accessTokenLocal ? JSON.parse(accessTokenLocal) : ""
  );
  const [userData, setUserData] = useState<userDataType>(
    userDataLocal ? JSON.parse(userDataLocal) : {}
  );

  useEffect(() => {
    localStorage.setItem(isLoginKey, JSON.stringify(isLogin));
  }, [isLogin]);

  useEffect(() => {
    localStorage.setItem(accessTokenKey, JSON.stringify(accessToken));
  }, [accessToken]);

  useEffect(() => {
    localStorage.setItem(userDataKey, JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider
      value={{
        isLogin,
        accessToken,
        userData,
        setIsLogin,
        setAccessToken,
        setUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
