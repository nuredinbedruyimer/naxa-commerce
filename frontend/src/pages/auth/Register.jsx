import Form from '@/components/common/Form'
import { registerFormControl } from '@/config'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '@/features/auth/authSlice'
import { toast } from '@/hooks/use-toast'


const intialState ={
  userName:"",
  email:"",
  password:""
}

function Register() {

  const [formData, setFormData] = useState(intialState)
  const dispatch  = useDispatch()
  const navigate = useNavigate()
  function onSubmit(event){
    event.preventDefault();
    dispatch(registerUser(formData)).then((data)=>{
      if (data.payload.success){
        toast({
          title:data?.payload.message
        })
        navigate("/auth/login")
      }else{
        console.log("I am here")
        toast({
          title:data?.payload.message
        })
      }
    })


  }
  console.log(formData)
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
      <h1 className='text-3xl text-foreground tracking-tight font-bold'>
        Register To NaxaCommerce

      </h1>
      <p className='mt-2 mr-6'>Already Have An Account ? <Link className='font-medium text-primary hover:underline' to="/auth/login"> Login</Link></p>
   
      </div>
      
      <Form
      formControls={registerFormControl}
      buttonText={"Sign Up"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      
      />
      
    </div>
  )
}

export default Register
