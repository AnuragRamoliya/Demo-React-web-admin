import React, { createContext,useState} from "react";
export const FormFieldContext = createContext();

const FormFieldContextProvider = (props) => {
    const [getFormFieldData, setFormFieldData] = useState({});
    const [getFormId, setFormId] = useState(0);
    
    return (
        <FormFieldContext.Provider value={{getFormFieldData,setFormFieldData,getFormId, setFormId}}>
            {props.children}
        </FormFieldContext.Provider>
    );
};

export default FormFieldContextProvider;
