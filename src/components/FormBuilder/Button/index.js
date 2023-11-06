import React, { useState,useContext, useEffect } from 'react'
import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import Autocomplete from "@mui/material/Autocomplete";
import Textarea from '@mui/material/TextareaAutosize';
import MDButton from 'components/MDButton';
import Icon from "@mui/material/Icon";
import {FormFieldContext} from 'context/formFieldContext';
import { getField,addFields,getOneForm } from "api/form";

const Button =(props) =>(
    <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
        <MDButton variant="gradient" color="info" type="submit" sx={{ width: 300 }}>
            Add Form
        </MDButton>
        <MDBox display="flex" flexWrap="wrap" justifyContent="flex-wrap">
            <MDButton onClick={(e)=>props.handleChangeIndex(props.index)}><Icon fontSize="small">delete</Icon></MDButton>
            <MDButton value={props.showFormFieldEdit} onClick={(e)=>props.setShowFormFieldEdit(true)}><Icon fontSize="small">edit</Icon></MDButton>
        </MDBox>
    </MDBox>
)

const DefaultButton =() =>(
    <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
        <MDButton variant="gradient" color="info" type="submit" sx={{ width: 300 }} href={"/form-builder"}>
            Add Form
        </MDButton>
    </MDBox>
)

export {Button , DefaultButton} ;