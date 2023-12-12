import Options from "components/FormBuilder/Select/optionData";

const OptionSwitchCase = (props)=>{

    console.log("props.selectBoxOptions",props.selectBoxOptions)
    const handleChangeIndex = async (myIndex) => {
        let data2 = await props.selectBoxOptions.filter((item,index) => { return index !== myIndex });
        props.setSelectBoxOptions(data2);
    }

    return (
        <>{props.selectBoxOptions.map((selectOptions,index)=>{
                switch (selectOptions) {
                    case "options" : { 
                        return <Options selectIndex={index} handleChangeIndex={handleChangeIndex} setSelectBoxOptions={props.setSelectBoxOptions} getFormFieldData={props.getFormFieldData} selectBoxOptions={props.selectBoxOptions}/>
                    }
                    default: {
                        return <></>
                    };
                }
            })
        }
    </>
    )

}

export default OptionSwitchCase;