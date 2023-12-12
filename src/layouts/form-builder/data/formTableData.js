// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useNavigate } from "react-router-dom";
// @mui material components
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import { deleteForm } from 'api/form';

export default function Data(listColumn,data) {
  const navigate = useNavigate();
  const handleFormDelete = async (id) => {
    await deleteForm(id);
    navigate("/form-builder")
  }

  const Title = ({title}) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {title}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  // const Status = ({ status }) => (
  //   <MDBox ml={-1}>
  //     <MDButton variant="text">
  //       <MDBadge badgeContent={(status === true) ? "ACTIVE" : "INACTIVE"} color={status === true ? "success" : "error"} variant="gradient" size="sm" />
  //     </MDButton>
  //   </MDBox>
  // );

  const Action = ({id})=>(
    <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
      <MDBox mr={1}>
        <MDButton variant="text" color="error" onClick={(e)=>handleFormDelete(id)}>
          <Icon>delete</Icon>&nbsp;delete
        </MDButton>
      </MDBox>
      <MDButton variant="text" color="dark" href={"form-builder/"+id}>
        <Icon>edit</Icon>&nbsp;edit
      </MDButton>
    </MDBox>
  )
  let rowData =[];
  data.map((row , index)=> {
    let userData = {
      form_name: <Title title={row.form_name} />,
      // status: <Status status={row.published}/>,
      action: <Action id={row.id}/>,
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
