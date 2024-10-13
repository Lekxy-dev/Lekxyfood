import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const initialValue={
    fullname:"",
    email:"",
    password:"",
    role:"ROLE_CUSTOMER"
}
const RegisterForm = ()=>{
    const Navigate=useNavigate();
    const handleSubmit=()=>{

    }
    return(
        <div>
        <Typography variant="h5" className="text-center">
         Register
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValue}>
             <Form>
             <Field
                 as={TextField} 
                 name="Fullname" 
                 label="full name"
                 variant="outlined"
                 margin="normal"
                 fullwidth/>
                 <Field
                 as={TextField} 
                 name="Email" 
                 label="Email"
                 variant="outlined"
                 margin="normal"
                 fullwidth/>
                  <Field 
                 as={TextField} 
                 name="Password" 
                 label="password"   
                 variant="outlined"
                 margin="normal"
                 fullwidth/>
                  <Button sx={{mt:2,padding: "1rem"}} fullWidth variant="contained">Register</Button>
             </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{mt:3}}>
          Already have an account?
          <Button size="small" onClick={()=>Navigate("/account/login")}>Login</Button>
        </Typography>
     </div>
    )
}
export default RegisterForm