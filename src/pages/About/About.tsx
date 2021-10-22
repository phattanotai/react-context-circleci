import { useContext, FC } from "react";
import { Button } from "antd";
import NumContext from "../../contexts/NumContext";

import "./About.css";

export type TProps = {
  title: string;
};
const About: FC<TProps> = ({ title }) => {
  const { num, setNum } = useContext(NumContext);
  return (
    <div>
      <label> {title}</label>
      <Button
        type="default"
        htmlType="button"
        onClick={() => {
          const i = num + 1;
          setNum(i);
        }}
      >
        +
      </Button>
      <Button
        type="default"
        htmlType="button"
        onClick={() => {
          const i = num - 1;
          setNum(i);
        }}
      >
        -
      </Button>
    </div>
  );
};
export default About;
