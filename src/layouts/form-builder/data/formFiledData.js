import React, { useState,useContext, useEffect } from 'react'
import Input from 'components/FormBuilder/Input'
import Select from 'components/FormBuilder/Select'
import {Button,DefaultButton} from 'components/FormBuilder/Button'
import Textarea from 'components/FormBuilder/Textarea'
import { useParams } from 'react-router-dom';
import {FormFieldContext} from 'context/formFieldContext';
import { getOneForm,deleteFormFields } from 'api/form';
import { updateFields } from 'api/form'

function FormFiledData(props) {
    let prams = useParams();
    const [formFields, setFormFields] = useState([]);
    let {getFormId, setFormId} = useContext(FormFieldContext);
    const handleChangeIndex = async (id,myIndex) => {
        console.log("id,myIndex",id,myIndex)
        await deleteFormFields(id);
        let data2 = await props.formFieldValues.filter((item,index) => { return item.field_index !== myIndex });
        await data2.map(async (formData,index)=>{
            formData.field_id = `form-field-${index}`;
            formData.field_index= index;
            await updateFields(formData, getFormId);
        })
        props.setFormFieldValues(data2);
    }

    useEffect(()=>{
        if(props.formFieldValues.length === 0){
            props.setShowFormFieldEdit(false)
        }
    },[])

    // useEffect(()=>{
    //     if(prams?.id){
    //         setFormId(parseInt(prams?.id));
    //         getFieldData(parseInt(prams?.id))
    //     }
    // },[prams?.id])

    // const getFieldData = async (id) =>{
    //     let response = await getOneForm(id)
    //     if(response && response?.status === 200){
    //         props.setFormFieldValues(response?.data?.data?.form_data?.input_fields)
    //     }
    // }

    const handleChange = async (index,field_type) => {
        props.setShowFormFieldEdit(true)
        props.setFieldIndex({index :`form-field-${index}`,field_type : field_type})
    }

    return (
        <>{
            props.formFieldValues.map((form_data,index)=>{
                switch (form_data.field_type) {
                    case "input" : { 
                        return  <Input index={form_data.field_index} field_type={form_data.field_type} form_data={form_data} handleChangeIndex={handleChangeIndex} handleChange={handleChange}/>
                    }
                    case "select":{ 
                        return <Select index={form_data.field_index} field_type={form_data.field_type} form_data={form_data} handleChangeIndex={handleChangeIndex} handleChange={handleChange}/>
                    };
                    case "textarea":{ 
                        return <Textarea index={form_data.field_index} field_type={form_data.field_type} form_data={form_data} handleChangeIndex={handleChangeIndex} handleChange={handleChange}/>
                    };
                    case "button":{ 
                        return <Button index={form_data.field_index} field_type={form_data.field_type} form_data={form_data} handleChangeIndex={handleChangeIndex} handleChange={handleChange}/>
                    };
                    default: {
                        return <></>
                    };
                }
            })
        }
        {props.formFieldValues.length > 0 && <DefaultButton />}
        </>
    )
}

export default FormFiledData;

