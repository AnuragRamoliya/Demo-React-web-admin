import React from "react";
import {MaterialUIControllerProvider} from "context/materialUIContext";
import UserContext from "context/userContext";
import AppContext from "context/appContext"
import FormFieldContext from 'context/formFieldContext';

const AllContext = (props) => {
  return (
    <AppContext>
      <UserContext>
        <FormFieldContext>
          <MaterialUIControllerProvider>
              {props.children}
          </MaterialUIControllerProvider>
        </FormFieldContext>
      </UserContext>
    </AppContext>
  );
};

export default AllContext;
