// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
// @mui material components
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import defaults from "assets/images/defaultAccountImage.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function data(listColumn,data) {
  
  const Title = ({ title }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {title}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Price = ({ price }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {price}
      </MDTypography>
      {/* <MDTypography variant="caption">{description}</MDTypography> */}
    </MDBox>
  );

  const Description = ({ description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {description}
      </MDTypography>
      {/* <MDTypography variant="caption">{description}</MDTypography> */}
    </MDBox>
  );

  const Status = ({ status }) => (
    <MDBox ml={-1}>
      <MDBadge badgeContent={(status === true) ? "ACTIVE" : "INACTIVE"} color={status === true ? "success" : "error"} variant="gradient" size="sm" />
    </MDBox>
  );

  let rowData =[];
  data.map((row , index)=> {
    let userData = {
      title: <Title title={row.title} />,
      price: <Price price={row.price}/>,
      description: <Description description={row.description}/>,
      status: <Status status={row.published}/>,
      action: (
        <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
          <MDBox mr={1}>
            <MDButton variant="text" color="error">
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
          <MDButton variant="text" color="dark" href={"product/update/"+row.id}>
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        </MDBox>
      ),
    }
    rowData.push(userData);
  })
  let columnData =[];
  listColumn.map((columns , index)=> {
    let data = { Header: columns, accessor: columns, align: "center" };
    columnData.push(data);
  })
  return {
    columns :columnData,
    rows: rowData,
  };
}
