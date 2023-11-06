// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Autocomplete from "@mui/material/Autocomplete";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Notifications from "examples/Notifications";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Textarea from "@mui/material/TextareaAutosize";
import FormFiledData from "layouts/form-builder/data/formFiledData";
import EditFormFiledData from "layouts/form-builder/data/editFormFieldData";

// api
import { addFormFields, getFormList } from "api/form";
import { FormFieldContext } from "context/formFieldContext";
import { getField } from "api/form";
import { addFields } from "api/form";
import { getOneForm } from "api/form";

function FormAdd() {
    let params = useParams();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [successSB, setSuccessSB] = useState(false);
    const [message, setMessage] = useState("");
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);
    const [formFields, setFormFields] = useState([]);
    const [formFieldValues, setFormFieldValues] = useState([]);
    const [showFormFieldEdit, setShowFormFieldEdit] = useState(false);
    const [getFieldIndex, setFieldIndex] = useState({});
    const entries = ["5", "10", "15", "20", "25"];
    let {getFormId, setFormId} = useContext(FormFieldContext);
    useEffect(() => {
        getFormList().then((res) => {
            setFormFields(res.data.data);
        });
    }, []);

    

    useEffect(() => {
        if (params?.id) {
            setFormId(parseInt(params?.id));
            getFieldData(parseInt(params?.id))
        }
    }, [params?.id])

    const getFieldData = async (id) => {
        let response = await getOneForm(id)
        if (response && response?.status === 200) {
            setFormFieldValues(response?.data?.data?.form_data?.input_fields)
        }
    }

    useEffect(() => {
        if(formFieldValues){
            setFormFieldValues(formFieldValues);
        }
    }, [formFieldValues]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };
    
    const handleSubmit = async (data) => {
        data.preventDefault();
        // let response = await addFormFields(inputs);
        // if(response.status === 200){
        //   setSuccessSB(true);
        //   setMessage({color:"success",message:response.data.message});
        //   setTimeout(function() {
        //     navigate("/product");
        //   }, 800);
        //   console.log(response.data)
        // }
    };

    const handleFormFieldButtonClick = async (e, name) => {
        let addFieldData = await addFields({
            field_id: `form-field-${formFieldValues?.length}`,
            field_index: formFieldValues?.length,
            form_id: getFormId,
            types: name === "input" ? "text" : "",
            field_type: name,
        });
        if(addFieldData && addFieldData?.status === 200){
            let response = await getField({
                field_id: addFieldData?.data?.data?.field_id,
                form_id: addFieldData?.data?.data?.form_id,
            })
            if (response && response?.status === 200) {
                setFormFieldValues((values) => [...values, response?.data?.data]);
            }
        }
        // setFormFieldValues((values) => [
        //     ...values,
        //     {
        //         field_type: name,
        //     },
        // ]);
        // setFormFieldValues(name)
    };

    const handleSetTabValue = (event, newValue) => setTabValue(newValue);
    return (
        <DashboardLayout>
            <DashboardNavbar />
            {successSB === true ? (
                <Notifications
                    open
                    color={message.color}
                    icon="check"
                    message={message.message}
                />
            ) : (
                ""
            )}
            <MDBox pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                                variant="gradient"
                                bgColor="info"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    Add Form Details
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={4}>
                                <MDBox pt={4} pb={3} px={3}>
                                    <MDBox component="form" role="form" onSubmit={handleSubmit}>
                                        {/* <MDBox mb={2}>
                            <MDInput type="text" label="Form Name" name="form_name" onChange={handleChange} value={inputs.title ||""}  required/>
                            </MDBox> */}
                                        <Grid item display="flex" width="100%">
                                            <MDBox width="20%" padding="0.5rem">
                                                <Card>
                                                    <MDBox margin="20px">
                                                        <AppBar position="static">
                                                            <Tabs
                                                                orientation={tabsOrientation}
                                                                value={tabValue}
                                                                onChange={handleSetTabValue}
                                                            >
                                                                <Tab
                                                                    label="Add New Field"
                                                                    icon={
                                                                        <Icon fontSize="small" sx={{ mt: -0.25 }}>
                                                                            add
                                                                        </Icon>
                                                                    }
                                                                />
                                                            </Tabs>
                                                        </AppBar>
                                                        <MDBox
                                                            pt={1}
                                                            px={1}
                                                            display="flex"
                                                            flexWrap="wrap"
                                                            justifyContent="flex-wrap"
                                                            alignItems="center"
                                                        >
                                                            {formFields?.map((field) => {
                                                                return (
                                                                    <MDButton
                                                                        sx={{ mt: 1, mr: 1 }}
                                                                        variant="outlined"
                                                                        color="info"
                                                                        size="small"
                                                                        onClick={(e) =>
                                                                            handleFormFieldButtonClick(e, field.name)
                                                                        }
                                                                    >
                                                                        {field.name}
                                                                    </MDButton>
                                                                );
                                                            })}
                                                        </MDBox>
                                                    </MDBox>
                                                </Card>
                                            </MDBox>
                                            <MDBox width="80%" padding="0.5rem">
                                                <Card>
                                                    <MDBox width="100%" display="flex">
                                                        <MDBox margin="20px" width="50%">
                                                            <AppBar position="static">
                                                                <Tabs orientation="horizontal" value={0}>
                                                                    <Tab
                                                                        label="Form Field"
                                                                        icon={
                                                                            <Icon fontSize="small" sx={{ mt: -0.25 }}>
                                                                                input
                                                                            </Icon>
                                                                        }
                                                                    />
                                                                </Tabs>
                                                            </AppBar>
                                                            <FormFiledData
                                                                handleChange={handleChange}
                                                                entries={entries}
                                                                formFieldValues={formFieldValues}
                                                                setFormFieldValues={setFormFieldValues}
                                                                showFormFieldEdit={showFormFieldEdit}
                                                                setShowFormFieldEdit={setShowFormFieldEdit}
                                                                setFieldIndex={setFieldIndex}
                                                            />
                                                        </MDBox>
                                                        <MDBox margin="20px" width="50%">
                                                            <AppBar position="static">
                                                                <Tabs orientation="horizontal" value={0}>
                                                                    <Tab
                                                                        label="Edit Form Field"
                                                                        icon={
                                                                            <Icon fontSize="small" sx={{ mt: -0.25 }}>
                                                                                edit
                                                                            </Icon>
                                                                        }
                                                                    />
                                                                </Tabs>
                                                            </AppBar>
                                                            {showFormFieldEdit && (
                                                                <EditFormFiledData
                                                                    formFieldValues={formFieldValues}
                                                                    entries={entries}
                                                                    setFormFieldValues={setFormFieldValues}
                                                                    getFieldIndex={getFieldIndex}
                                                                    getFieldData={getFieldData}
                                                                />
                                                            )}
                                                        </MDBox>
                                                    </MDBox>
                                                </Card>
                                            </MDBox>
                                        </Grid>
                                    </MDBox>
                                </MDBox>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default FormAdd;
