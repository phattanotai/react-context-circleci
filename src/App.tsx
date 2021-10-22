import { useContext } from "react";
import Navbar from "./components/Navbar";
import AppRoute from "./components/AppRoute";
import { Layout } from "antd";
import UserContext from "./contexts/UserContext";
import NumContext from "./contexts/NumContext";
import Login from "./pages/Login";
import { Redirect, Route } from "react-router-dom";

function App() {
  const { isLogin } = useContext(UserContext);
  const { num } = useContext(NumContext);
  const { Header, Content, Footer } = Layout;

  if (!isLogin) {
    return (
      <div>
        <Redirect to="/login" />
        <Route exact path="/login" component={Login}></Route>
      </div>
    );
  }
  return (
    <div>
      <Header>
        <Navbar> </Navbar>
      </Header>
      <Content className="content-app">
        <AppRoute />
      </Content>
      <Footer>{num}</Footer>
    </div>
  );
}

export default App;
