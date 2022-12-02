import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Material Dashboard 2 React components
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Notifications({open,color,icon,message}) {
  const [successSB, setSuccessSB] = useState(false); 
  const closeSuccessSB = () => setSuccessSB(false);
  useEffect(() => {
    setSuccessSB(open)
  }, []);
  console.log(color,message);
   return (
    <MDSnackbar
      color={color}
      icon={icon}
      title="Material Dashboard"
      content={message}
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );
}


Notifications.defaultProps = {
  open:false,
  color:"",
  message:"",
  icon:"",
};

// Typechecking props for the DataTable
Notifications.propTypes = {
  open : PropTypes.bool,
  icon : PropTypes.oneOf([
    "notifications",
    "check",
    "warning",
    "star",
  ]),
  color: PropTypes.oneOf([
    "notifications",
    "success",
    "warning",
    "error",
  ]),
  message: PropTypes.string,
};

export default Notifications;
