// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

export default function data(listColumn,data) {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      {/* <MDTypography variant="caption">{description}</MDTypography> */}
    </MDBox>
  );

  const Status = ({ status }) => (
    <MDBox ml={-1}>
      <MDBadge badgeContent={(status == 1) ? "ACTIVE" : "INACTIVE"} color={status == 1 ? "success" : "error"} variant="gradient" size="sm" />
    </MDBox>
  );

  let rowData =[];
  data.map((row , index)=> {
    let userData = {
      author: <Author image={row.user_images[0]?.image} name={row.first_name+" "+row.last_name} email={row.email} />,
      role: <Job title={row.role_type}/>,
      status: <Status status={row.status}/>,
      action: (
        <MDTypography component="a" href={"tables/"+row.id} variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      ),
    }
    rowData.push(userData);
  })
  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "role", accessor: "role", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: rowData,
  };
}