// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function Form(props) {
    return (
        <MDBox pt={4}>
            <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form" onSubmit={((e)=> props.handleSubmit(e))}>
                    {
                        props.formData[0]?.input_fields.map((cur)=>{
                        return (
                            <>
                            <MDBox mb={2}>
                                <MDInput type={cur.types} label={cur.label} name={cur.name} onChange={((e)=> props.handleChange(e))} value={props.inputs[cur.name] ||""} fullWidth required={cur.required || ""}/>
                            </MDBox>
                            </>
                        )})
                    }
                    <MDBox mt={4} mb={1}>
                        <MDButton variant="gradient" color="info" type="submit" fullWidth>
                            Add Form
                        </MDButton>
                    </MDBox>
                </MDBox>
            </MDBox>
        </MDBox>
    );
}

export default Form;
