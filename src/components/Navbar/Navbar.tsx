import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Space, Typography, Divider } from "antd";
import { userDataType } from "../../types/UserType";
import Usercontext from "../../contexts/UserContext";

interface Props {}

const Navbar: React.FC = (props: Props) => {
  const { setAccessToken, setIsLogin, setUserData } = useContext(Usercontext);

  const handleLogout = () => {
    setIsLogin(false);
    setAccessToken("");
    const data: userDataType = {
      id: "1",
      name: "test",
      email: "test",
      username: "test",
      accessToken: "ssfsfre",
    };
    setUserData(data);
  };
  return (
    <Space split={<Divider type="vertical" />}>
      <Link to="/home" component={Typography.Link}>
        Home
      </Link>
      <Link to="/about" component={Typography.Link}>
        About
      </Link>
      <Link to="" component={Typography.Link} onClick={handleLogout}>
        Logout
      </Link>
    </Space>
  );
};

export default Navbar;
