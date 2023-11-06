import React, { useState,useContext, useEffect } from 'react'
import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import Autocomplete from "@mui/material/Autocomplete";
import Textarea from '@mui/material/TextareaAutosize';
import MDButton from 'components/MDButton';
import Icon from "@mui/material/Icon";
import {FormFieldContext} from 'context/formFieldContext';
import { getField,addFields,getOneForm } from "api/form";

const TextareaField = (props) => (
    <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
        <Textarea
            placeholder="Type in here…"
            minRows={2}
            maxRows={4}
            style={{ width: 300,height:"120px" , borderRadius:"0.375rem"}}
        />
        <MDBox display="flex" flexWrap="wrap" justifyContent="flex-wrap">
            <MDButton onClick={(e)=>props.handleChangeIndex(props.index)}><Icon fontSize="small">delete</Icon></MDButton>
            <MDButton value={props.showFormFieldEdit} onClick={(e)=>props.setShowFormFieldEdit(true)}><Icon fontSize="small">edit</Icon></MDButton>
        </MDBox>
    </MDBox>
);

export default TextareaField;