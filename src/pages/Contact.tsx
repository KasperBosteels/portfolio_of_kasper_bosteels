import closeBar from "../components/SnackBarAction";
import EmailForm from "../components/EmailForm"
import Snackbar from "@mui/material/Snackbar"
import sendEmail from "../services/sendEmail"
import { useState } from "react";

const Contact = ()=>{
const [open,setOpen]=useState(false);
const onSubmit=(name:string,email:string,topic:string,message:string)=>{
  let response = sendEmail({name:name,email:email,topic:topic,message:message})
  console.log(response)
  setOpen(true)
}
const handleClose=()=>{
  setOpen(false)
}
return (<>
  <EmailForm sendEmail={onSubmit}/>
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      message="email send"
      action={closeBar({handleClose})}
      />
    </>
    )
}
export default Contact;