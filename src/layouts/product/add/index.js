// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Notifications from "examples/Notifications";
// api
import { addProduct } from "api/product";

function Product() {
  const params = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [successSB, setSuccessSB] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
  };

  const handleSubmit = async (data) => {
    data.preventDefault();
    let response = await addProduct(inputs);
    if(response.status === 200){
      setSuccessSB(true);
      setMessage({color:"success",message:response.data.message});
      setTimeout(function() {
        navigate("/product");
      }, 800);
      console.log(response.data)
    }
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {successSB === true ? (<Notifications open color={message.color} icon="check" message={message.message}/>) : ""}
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
                  Add Product Details
                </MDTypography>
              </MDBox>
              <MDBox pt={4}>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form" onSubmit={handleSubmit}>
                    <MDBox mb={2}>
                      <MDInput type="text" label="Product Title" name="title" onChange={handleChange} value={inputs.title ||""} fullWidth required/>
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput type="number" label="Price" name="price" onChange={handleChange} value={inputs.price ||""} fullWidth required/>
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput type="text" label="Description" name="description" onChange={handleChange} value={inputs.description ||""} fullWidth required/>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDButton variant="gradient" color="info" type="submit" fullWidth>
                        Add product
                      </MDButton>
                    </MDBox>
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

export default Product;
