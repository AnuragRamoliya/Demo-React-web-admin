import React, { useState, useContext } from "react";
import { AppContext } from "context/appContext"
// react-router-dom components
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Notifications from "examples/Notifications";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// use formik for submit form
import { useFormik } from "formik"; 

// api
import { userLogin,getUserList } from "api/user";
import { getAllForm } from "api/form";

function Basic() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [successSB, setSuccessSB] = useState(false);
  const [message, setMessage] = useState("");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const { Login } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate : (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (values) => {
      handleUserLogin(values);
    },
  });

  const handleUserLogin = async (values) =>{
    let response = await userLogin(values);
    if (response && response.status === 200) {
      Login(response.data.data.token);
      setSuccessSB(true);
      setMessage({color:"success",message:response.data.message});
      setTimeout(function() {
        // window.location.replace("/dashboard");
        navigate("/users");
      }, 1000);
    }
  }

  const { values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting, } = formik;
  return (
    <BasicLayout image={bgImage}>
      <Card>
      {successSB === true ? (<Notifications open color={message.color} icon="check" message={message.message}/>) : ""}
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} fullWidth required/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={RouterLink}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
