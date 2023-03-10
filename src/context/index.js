import React from "react";
import {MaterialUIControllerProvider} from "context/materialUIContext";
import UserContext from "context/userContext";
import AppContext from "context/appContext"

const AllContext = (props) => {
  return (
    <AppContext>
      <UserContext>
        <MaterialUIControllerProvider>
            {props.children}
        </MaterialUIControllerProvider>
      </UserContext>
    </AppContext>
  );
};

export default AllContext;
