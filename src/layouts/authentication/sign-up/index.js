// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
// use formik for submit form
import { useFormik } from "formik";

// api
import { userRegister } from "api/user";

function Cover() {
  const formik = useFormik({
    initialValues: {
      user_name:"",
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      console.log(values)
      userRegister(values).then((response) =>{
        console.log(response)
      }).catch((error) => console.log(error));
    },
  });

  const { values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting } = formik;
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput type="text" label="User Name" variant="standard" id="user_name" onChange={handleChange} onBlur={handleBlur} value={values.user_name} required fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} required fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} required fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Confirm Password" variant="standard" id="confirm_password" onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} required fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox required/>
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" fullWidth>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
