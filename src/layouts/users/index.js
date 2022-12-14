// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import Notifications from "examples/Notifications";
// Data
import authorsTableData from "layouts/users/data/userTableData";

// api
import { getUserList } from "api/user";

function Users() {
  const [data,setData] = useState([]);
  const [successSB, setSuccessSB] = useState(false);
  const [message, setMessage] = useState("");
  const setListColumn = ['name','role','status','action']
  
  useEffect(() => {
    handleGetUserDetails();
  }, []);

  const handleGetUserDetails = async () =>{
    await getUserList().then((response)=>{
      // console.log("response",response)
      if(response.status === 200){
        setSuccessSB(true);
        setMessage({color:"success",message:response.data.message});
        setData(response.data.data);
      }
    }).catch((err)=>{
      console.log("err",err);
      alert(err.response.data.message);
    })
  }
  
  const { columns, rows } = authorsTableData(setListColumn,data);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {successSB === true ? (<Notifications open color={message.color} icon="check" message={message.message}/>) : ""}
      <MDButton variant="gradient" color="info">
      <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        &nbsp;add new user
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
                  Users Details
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
    </DashboardLayout>
  );
}

export default Users;
