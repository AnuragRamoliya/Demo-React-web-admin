import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

const Input = (props) => {
    return (
        <MDBox pt={2} px={2} display="flex" flexWrap="wrap" justifyContent="flex-wrap" alignItems="center">
            <MDInput type={props?.form_data?.types || ""} id={props?.form_data?.id} label={props?.form_data?.label || ""} name={props?.form_data?.name || ""} sx={{ width: 300 }} placeholder={props?.form_data?.placeholder || ""} required={props?.form_data?.required || false} />
            <MDBox display="flex" flexWrap="wrap" justifyContent="flex-wrap">
                <IconButton
                    size="small"
                    disableRipple
                    color="default"
                    onClick={(e) => props?.handleChangeIndex(props?.form_data?.id, props?.index)}
                    sx={{ ml: 2 }}
                >
                    <Icon >delete</Icon>
                </IconButton>

                <IconButton
                    size="small"
                    disableRipple
                    color="default"
                    value={props?.showFormFieldEdit}
                    onClick={(e) => props.handleChange(props?.index, props?.field_type)}
                    sx={{ ml: 2 }}
                >
                    <Icon>edit</Icon>
                </IconButton>
            </MDBox>
        </MDBox>
    )
}

export default Input;