import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Material Dashboard 2 React components
import MDSnackbar from "components/MDSnackbar";

function Notifications({open,color,icon,message}) {
  const [successSB, setSuccessSB] = useState(false); 
  const closeSuccessSB = () => setSuccessSB(false);
  useEffect(() => {
    setSuccessSB(open)
  }, []);
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
  color:"warning",
  message:"",
  icon:"warning",
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
