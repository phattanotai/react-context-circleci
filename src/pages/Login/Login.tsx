import { useContext, FC } from "react";
import {
  Form,
  Button,
  Input,
  Space,
  Divider,
  // message,
  notification,
} from "antd";

import "./Login.css";

import { IAppProps, TProps, LoginDataType } from "../../types/pages/LoginType";
import { userDataType } from "../../types/UserType";

import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

const Login: FC<TProps> = ({ title }) => {
  let history = useHistory();
  const {
    isLogin,
    setIsLogin,
    accessToken,
    setAccessToken,
    userData,
    setUserData,
  } = useContext(UserContext);

  if (isLogin) {
    console.log(33);
    history.push("/home");
  }

  const [loginForm] = Form.useForm();
  const handleLogin = async (value: LoginDataType) => {
    console.log(value);
    const data: userDataType = {
      id: "1",
      name: "test",
      email: "test",
      username: "test",
      accessToken: "ssfsfre",
    };
    // message.info("rrer");
    notification.success({
      message: "dsd",
    });
    setIsLogin(true);
    setAccessToken("asdasdasd");
    setUserData(data);
    history.push("/home");
  };
  return (
    <div className="login-page">
      <label> {title} Circleci</label>
      <Form
        form={loginForm}
        name="loginForm"
        layout="vertical"
        onFinish={handleLogin}
        onReset={() => {
          loginForm.resetFields();
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please Enter Username",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please Enter Username",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Divider />
        <Space>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Button type="default" htmlType="reset">
            Reset
          </Button>
        </Space>
      </Form>
    </div>
  );
};
export default Login;

// // export default function Login({title}: IProps): ReactElement {
// //     return (
// //         <div>
// //             {title}
// //         </div>
// //     )
// // }

// export default class Login extends React.Component<IAppProps> {
//  constructor(props: IAppProps){
//      super(props)
//  }
//   public render() {
//     return (
//       <div>
//         {this.props.title}
//       </div>
//     );
//   }
// }
