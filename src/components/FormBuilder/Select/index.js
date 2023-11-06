import React, { useState,useContext, useEffect } from 'react'
import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import Autocomplete from "@mui/material/Autocomplete";
import MDButton from 'components/MDButton';
import Icon from "@mui/material/Icon";
import {FormFieldContext} from 'context/formFieldContext';
import { getField,addFields,getOneForm } from "api/form";
import IconButton from "@mui/material/IconButton";

const Select = (props) => {
    const entries = ["text", "email", "number", "link", "checkbox"];
    const [getFormFieldData, setFormFieldData] = useState({});
    let {getFormId, setFormId} = useContext(FormFieldContext);
    console.log("props",props)
    // useEffect(async () => {
    //     await getField({ field_id: `form-field-${props.index}`, form_id: getFormId }).then(async (response) => {
    //         if (response && response?.status === 200) {
    //             if (response?.data?.data === null) {
    //                 await addFields({ field_id: `form-field-${props.index}`, form_id: getFormId, field_type: props.field_type });
    //                 await getField({ field_id: `form-field-${props.index}`, form_id: getFormId }).then((response) => {
    //                     if (response && response?.status === 200) {
    //                         setFormFieldData(response?.data?.data);
    //                     }
    //                 })
    //             } else {
    //                 setFormFieldData(response?.data?.data);
    //             }
    //         }
    //     }).catch((err) => {
    //         console.log("err", err);
    //         alert(err.response.data.message);
    //     })
    // }, [])
    return (
    <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={entries}
            sx={{ width: 300 }}
            renderInput={(params) => <MDInput {...params} label={props.form_data.label || ""} />}
        />
        <MDBox display="flex" flexWrap="wrap" justifyContent="flex-wrap">
            <IconButton
                size="small"
                disableRipple
                color="default"
                onClick={(e)=>props.handleChangeIndex(props.form_data.id,props.index)}
                sx={{ ml:2 }}
            >
                <Icon >delete</Icon>
            </IconButton>

            <IconButton
                size="small"
                disableRipple
                color="default"
                value={props.showFormFieldEdit} 
                onClick={(e)=>props.handleChange(props.index,props.field_type)}
                sx={{ ml:2 }}
            >
                <Icon>edit</Icon>
            </IconButton>
        </MDBox>
    </MDBox>
    )
};

export default Select;