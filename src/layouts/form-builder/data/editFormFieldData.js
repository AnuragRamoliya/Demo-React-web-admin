import React, { useState, useContext, useEffect } from "react";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import Autocomplete from "@mui/material/Autocomplete";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormFieldContext } from "context/formFieldContext";
import { getField, updateFields, getInputTypes } from "api/form";
import Button from "@mui/material/Button";
import OptionSwitchCase from "components/FormBuilder/Select/selectOptions";
import IconButton from "@mui/material/IconButton";
import { useParams } from "react-router-dom";

function EditFormFiledData(props) {
    let prams = useParams();
    const [checked, setChecked] = useState(false);
    const [inputTypes, setInputTypes] = useState([]);
    const [selectBoxOptions, setSelectBoxOptions] = useState(["options"]);
    let { getFormFieldData, setFormFieldData, getFormId } =
        useContext(FormFieldContext);

    useEffect(() => {
        handleFieldDetails();
    }, [props.getFieldIndex.index]);

    const handleFieldDetails = async () => {
        await getInputTypes().then((response) => {
            if (response && response.status === 200) {
                setInputTypes(response.data.data);
            }
        });
        await getField({ field_id: props.getFieldIndex.index, form_id: getFormId })
            .then((response) => {
                if (response && response.status === 200) {
                    setFormFieldData(response.data.data);
                    setChecked(response.data.data.required === 1 ? true : false)
                }
            })
            .catch((err) => {
                console.log("err", err);
                alert(err.response.data.message);
            });
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormFieldData((values) => ({ ...values, [name]: value }));
    };

    const handleSelectBoxChange = (event) => {
        const name = "types";
        const value = event;
        setFormFieldData((values) => ({ ...values, [name]: value }));
    };
    const handleCheckBoxChange = async (event) => {
        setChecked(event.target.checked);
        const name = event.target.name;
        const value = event.target.checked;
        setFormFieldData((values) => ({ ...values, [name]: value }));
    };
    const handleSubmit = async () => {
        let response = await updateFields(getFormFieldData, getFormFieldData.id);
        if (response && response.status === 200) {
            props.getFieldData(parseInt(prams?.id))
        }
    };

    const FieldId = () => (
        <MDBox
            pt={2}
            px={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-wrap"
            alignItems="center"
        >
            <MDInput
                type="text"
                label="Field ID"
                name="field_id"
                value={getFormFieldData.field_id || ""}
                sx={{ width: 300 }}
                readonly
            />
        </MDBox>
    );

    const Label = () => (
        <MDBox
            pt={2}
            px={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-wrap"
            alignItems="center"
        >
            <MDInput
                type="text"
                label="Title"
                name="label"
                onChange={handleChange}
                value={getFormFieldData.label || ""}
                sx={{ width: 300 }}
            />
        </MDBox>
    );

    const InputType = () => (
        <MDBox
            pt={2}
            px={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-wrap"
            alignItems="center"
        >
            <Autocomplete
                value={getFormFieldData.types || ""}
                onChange={(event, newValue) => {
                    handleSelectBoxChange(newValue);
                }}
                id="controllable-states-demo"
                options={inputTypes}
                sx={{ width: 300 }}
                renderInput={(params) => <MDInput {...params} label="Input Type" />}
            />
        </MDBox>
    );

    const Required = () => (
        <MDBox
            pt={2}
            px={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-wrap"
            alignItems="center"
        >
            <FormControlLabel
                control={
                    <Checkbox
                        name="required"
                        checked={checked}
                        onChange={handleCheckBoxChange}
                        inputProps={{ "aria-label": "position" }}
                    />
                }
                label="Required?"
                labelPlacement="start"
            />
        </MDBox>
    );

    const Placeholder = () => (
        <MDBox
            pt={2}
            px={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-wrap"
            alignItems="center"
        >
            <MDInput
                type="text"
                label="Placeholder"
                name="placeholder"
                onChange={handleChange}
                value={getFormFieldData.placeholder || ""}
                sx={{ width: 300 }}
            />
        </MDBox>
    );

    const FieldName = () => (
        <MDBox
            pt={2}
            px={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-wrap"
            alignItems="center"
        >
            <MDInput
                type="text"
                label="Unique Name/ID"
                name="name"
                onChange={handleChange}
                value={getFormFieldData.name || ""}
                sx={{ width: 300 }}
            />
        </MDBox>
    );

    const SubmitButton = () => (
        <MDBox
            pt={2}
            px={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-wrap"
            alignItems="center"
        >
            <MDButton
                variant="gradient"
                color="info"
                type="button"
                onClick={(e) => handleSubmit()}
                sx={{ width: 300 }}
            >
                Submit
            </MDButton>
        </MDBox>
    );

    const AddOptions = () => (
        <>
            <MDBox
                pt={2}
                px={2}
                display="flex"
                flexWrap="wrap"
                justifyContent="flex-wrap"
                alignItems="center"
            >
                <MDTypography variant="h6" color="default">
                    Options
                </MDTypography>
            </MDBox>
            <OptionSwitchCase
                selectBoxOptions={selectBoxOptions}
                setSelectBoxOptions={setSelectBoxOptions}
                getFormFieldData={getFormFieldData}
            />
        </>
    );
    // const SwitchCase = ({field_type})=>{
    //     switch (field_type) {
    //         case "input" : {
    //             return (<><FieldId/><Label/><InputType/><Required/><Placeholder/><FieldName/><SubmitButton/></>)
    //         }
    //         case "select":{
    //             return (<><FieldId/><Label/><Required/><FieldName/><AddOptions/><SubmitButton/></>)
    //         };
    //         default: {
    //             return <></>
    //         };
    //     }
    // }

    return (
        <>
            {/* <SwitchCase field_type={props?.getFieldIndex?.field_type}/> */}
            <MDBox
                pt={2}
                px={2}
                display="flex"
                flexWrap="wrap"
                justifyContent="flex-wrap"
                alignItems="center"
            >
                <MDInput
                    type="text"
                    label="Field ID"
                    name="field_id"
                    value={getFormFieldData.field_id || ""}
                    sx={{ width: 300 }}
                    readonly
                />
            </MDBox>
            <MDBox
                pt={2}
                px={2}
                display="flex"
                flexWrap="wrap"
                justifyContent="flex-wrap"
                alignItems="center"
            >
                <MDInput
                    type="text"
                    label="Title"
                    name="label"
                    onChange={handleChange}
                    value={getFormFieldData.label || ""}
                    sx={{ width: 300 }}
                />
            </MDBox>
            {props?.getFieldIndex?.field_type === "input" && (
                <MDBox
                    pt={2}
                    px={2}
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="flex-wrap"
                    alignItems="center"
                >
                    <Autocomplete
                        value={getFormFieldData.types || ""}
                        onChange={(event, newValue) => {
                            handleSelectBoxChange(newValue);
                        }}
                        id="controllable-states-demo"
                        options={inputTypes}
                        sx={{ width: 300 }}
                        renderInput={(params) => <MDInput {...params} label="Input Type" />}
                    />
                </MDBox>
            )}
            <MDBox
                pt={2}
                px={2}
                display="flex"
                flexWrap="wrap"
                justifyContent="flex-wrap"
                alignItems="center"
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            name="required"
                            checked={checked}
                            onChange={handleCheckBoxChange}
                            inputProps={{ "aria-label": "position" }}
                        />
                    }
                    label="Required?"
                    labelPlacement="start"
                />
            </MDBox>
            <MDBox
                pt={2}
                px={2}
                display="flex"
                flexWrap="wrap"
                justifyContent="flex-wrap"
                alignItems="center"
            >
                <MDInput
                    type="text"
                    label="Placeholder"
                    name="placeholder"
                    onChange={handleChange}
                    value={getFormFieldData.placeholder || ""}
                    sx={{ width: 300 }}
                />
            </MDBox>
            <MDBox
                pt={2}
                px={2}
                display="flex"
                flexWrap="wrap"
                justifyContent="flex-wrap"
                alignItems="center"
            >
                <MDInput
                    type="text"
                    label="Unique Name/ID"
                    name="name"
                    onChange={handleChange}
                    value={getFormFieldData.name || ""}
                    sx={{ width: 300 }}
                />
            </MDBox>
            {props?.getFieldIndex?.field_type === "select" && (
                <>
                    <MDBox
                        pt={2}
                        px={2}
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="flex-wrap"
                        alignItems="center"
                    >
                        <MDTypography variant="h6" color="default">
                            Options
                        </MDTypography>
                    </MDBox>
                    <OptionSwitchCase
                        selectBoxOptions={selectBoxOptions}
                        setSelectBoxOptions={setSelectBoxOptions}
                        getFormFieldData={getFormFieldData}
                    />
                </>
            )}
            <SubmitButton />
        </>
    );
}

export default EditFormFiledData;
