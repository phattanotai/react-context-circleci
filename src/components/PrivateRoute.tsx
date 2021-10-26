import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const PrivateRoute = ({
  component: Component,
  children: children,
  ...rest
}: any) => {
  const { isLogin } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && Component ? (
          <>
            <Component {...props}></Component>
            <>{children} </>
          </>
        ) : isLogin && !Component ? (
          <>{children} </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
