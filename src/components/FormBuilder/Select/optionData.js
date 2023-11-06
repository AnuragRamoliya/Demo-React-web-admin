import React, { useState,useContext, useEffect } from 'react'
import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import { addFieldOptions } from "api/form";

const Options = (props)=>{

    useEffect(async ()=>{ 
        console.log("object")
        await addFieldOptions({input_field_id:props.getFormFieldData.id,form_field_type:props.getFormFieldData.field_type})
    },[])
    return (
        <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
            <MDInput type="text" label={`Option ${props.selectIndex + 1}`} name="options" value={""} sx={{ width: 200 }}/>
            <MDBox display="flex" flexWrap="wrap" justifyContent="flex-wrap">
                <IconButton
                    size="small"
                    disableRipple
                    color="success"
                    onClick={(e)=>props.setSelectBoxOptions(values => ([...values, "options"]))}
                    sx={{ ml:1 }}
                >
                    <Icon >add</Icon>
                </IconButton>
                {props.selectBoxOptions.length > 1 && 
                    <IconButton
                        size="small"
                        disableRipple
                        color="error"
                        onClick={(e)=>props.handleChangeIndex(props.selectIndex)}
                        sx={{ ml:2 }}
                    >
                        <Icon>remove</Icon>
                    </IconButton>
                }
            </MDBox>
        </MDBox >
    )
}

export default Options