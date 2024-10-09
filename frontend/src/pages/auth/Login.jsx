import Form from '@/components/common/Form'
import { loginFormControl, registerFormControl } from '@/config'
import { loginUser } from '@/features/auth/authSlice'
import { toast } from '@/hooks/use-toast'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


const intialState ={
  email:"",
  password:""
}

function Login() {


  const [formData, setFormData] = useState(intialState)
  const dispatch = useDispatch()
  function onSubmit(event){
    event.preventDefault();
    dispatch(loginUser(formData)).then((data)=>{

      console.log("Nuredin Here")
      

      if (data?.payload?.success){
        toast({
          title:data?.payload?.message
        })
     
     
         }else{
          toast({
            title:data?.payload?.message,
          })
         }
 


    })

  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
      <h1 className='text-3xl text-foreground tracking-tight font-bold'>
        Login To NaxaCommerce

      </h1>
      <p className='mt-2 mr-6'>Don't Have An Account ? <Link className='font-medium text-primary hover:underline' to="/auth/register">Sign Up</Link></p>

      
   
      </div>
      <Form
      formControls={loginFormControl}
      buttonText={"Login"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      
      />
      
    </div>
  )
}

export default Login
