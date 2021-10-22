import React, { Component } from "react";
import { UserProvider } from "./UserContext";
import { NumProvider } from "./NumContext";

const providers = [UserProvider, NumProvider];

const ContextProvider = (...components: React.FC[]): React.FC =>
  components.reduce(
    (AccumComponents, Component) =>
      ({ children }: any): JSX.Element =>
        (
          <AccumComponents>
            <Component>{children}</Component>
          </AccumComponents>
        ),
    ({ children }: any) => <>{children} </>
  );

export default ContextProvider(...providers);
