// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from 'components/MDInput'
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import Notifications from "examples/Notifications";
import Modal from '@mui/material/Modal';
import { FormFieldContext } from 'context/formFieldContext';
// Data
import FormTableData from "layouts/form-builder/data/formTableData";

// api
import { getAllForm, addFormFields } from 'api/form';

function FormBulider() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [successSB, setSuccessSB] = useState(false);
    const [message, setMessage] = useState("");
    const setListColumn = ['form_name', 'action']
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formName, setFormName] = useState("");

    let { getFormId, setFormId } = useContext(FormFieldContext);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    useEffect(() => {
        handleGetFormDetails();
    }, []);

    const handleGetFormDetails = async () => {
        await getAllForm().then((response) => {
            if (response && response.status === 200) {
                setData(response.data.data);
            }
        }).catch((err) => {
            console.log("err", err);
            alert(err.response.data.message);
        })
    }

    const handleSubmit = async () => {
        let response = await addFormFields(formName)
        if (response && response.status === 200) {
            navigate(`/form-builder/${response.data.data.id}`)
        }
    }
    const { columns, rows } = FormTableData(setListColumn, data);
    // href="/form-builder/add"

    return (
        <DashboardLayout>
            <DashboardNavbar />
            {successSB === true ? (<Notifications open color={message.color} icon="check" message={message.message} />) : ""}
            <MDButton variant="gradient" color="info" onClick={handleOpen}>
                <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                &nbsp;add new form
            </MDButton>
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
                                    Form Details
                                </MDTypography>
                            </MDBox>
                            <MDBox pt={3}>
                                <DataTable
                                    table={{ columns, rows }}
                                    isSorted={false}
                                    entriesPerPage={true}
                                    showTotalEntries={true}
                                    noEndBorder
                                />
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <MDBox sx={style}>
                    <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
                        <MDTypography id="modal-modal-title" variant="h6" component="h2">
                            Create New Form
                        </MDTypography>
                    </MDBox>
                    <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
                        <MDInput type="text" label="Form Name" name="form_name" value={formName.form_name || ""} onChange={(e) => setFormName(values => ({ ...values, [e.target.name]: e.target.value }))} sx={{ width: 300 }} required />
                    </MDBox>
                    <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
                        <MDButton variant="gradient" color="info" onClick={handleSubmit}>
                            &nbsp;Create new form
                        </MDButton>
                    </MDBox>
                </MDBox>
            </Modal>
        </DashboardLayout>
    );
}

export default FormBulider;
