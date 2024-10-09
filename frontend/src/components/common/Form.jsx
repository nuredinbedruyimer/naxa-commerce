import React from 'react'
import {Label}  from "../ui/label"
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

import { FORM_TYPE } from '@/constants/types';
import { Button } from '../ui/button';


const Form = ({ formControls,formData, setFormData,onSubmit, buttonText }) => {



    


    function getComponentByType(
        formControl) {
        let element = null;
        const value = formData[formControl.name] || ""
    
        switch (formControl.componentType) {
            case FORM_TYPE.INPUT:
                element = (
                    <Input
                        name={formControl.name}
                        placeholder={formControl.placeholder}
                        id={formControl.name}
                        type={formControl.type}
                        value={value}
                        onChange = {event =>setFormData({
                            ...formData,
                            [formControl.name] : event.target.value
                        })}
                        
                    />
                );
                break;
    
            case FORM_TYPE.SELECT:
                element = (
                    <Select onValueChange={(value)=>setFormData({
                        ...formData, 
                        [formControl.name]:value
                    })} value={value}>
                        <SelectTrigger>
                            <SelectValue placeholder = {formControl.placeholder}/>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                formControl.options &&
                                formControl.options.length > 0 ?
                                formControl.options.map(optionItem =><SelectItem key={optionItem.id} value={optionItem.id}>
                                {optionItem.label}
                                </SelectItem>):null

                            }
                        </SelectContent>
                    </Select>
                    
                );
                break;
    
            case FORM_TYPE.SELECT:
                element = (
                    <Textarea
                        name={formControl.name}
                        placeholder={formControl.placeholder}
                        id={formControl.name}
                        value={value}
                        onChange = {event =>setFormData({
                            ...formData,
                            [formControl.name] : event.target.value
                        })}
                    />
                );
                break;
    
            default:
                element = (
                    <Input
                        name={formControl.name}
                        placeholder={formControl.placeholder}
                        id={formControl.name}
                        type={formControl.type}
                        value={value}
                        onChange = {event =>setFormData({
                            ...formData,
                            [formControl.name] : event.target.value
                        })}
                    />
                );
                break;
        }
    
        return element;
    }
    
return (
    <form onSubmit={onSubmit}>
    <div className='flex flex-col gap-3'>
        {
        formControls.map((formControl) => (
            <div key={formControl.name} className='grid gap-1.5 w-full'>
                <Label className="mb-1">{formControl.label}</Label>
                {   
                    getComponentByType(formControl)
                    
                }
            </div>
        ))
        }
    </div>
    
    <Button type = "submit" className = "mt-2 w-full bg-lime-700 hover:bg-lime-800">
        {
            buttonText || "Submit"
        }
    </Button>
    </form>
)
}

export default Form
