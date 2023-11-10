import closeBar from "../components/SnackBarAction";
import EmailForm from "../components/EmailForm"
import Snackbar from "@mui/material/Snackbar"
import sendEmail from "../services/sendEmail"
import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./pageStyling.css";

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
return (<Box className="Contact_container">
  <Paper elevation={3} sx={{padding:2, width:"fit-content"}}>
    <Typography variant="h4" component="div" marginBottom="2rem">Contact information:</Typography>
    <Box>
      <Typography variant="h5" component="div">Email:</Typography>
      <Typography variant="body1" component="div">kasperbosteels@hotmail.com</Typography>
      <Typography variant="h5" component="div">Phone:</Typography>
      <Typography variant="body1" component="div">+324 91 30 45 48</Typography>
      <Typography variant="h5" component="div">LinkedIn:</Typography>
      <Typography variant="body1" component="div">https://be.linkedin.com/in/kasper-bosteels</Typography>
    </Box>
  </Paper>
  <EmailForm sendEmail={onSubmit}/>
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      message="email send"
      action={closeBar({handleClose})}
      />
    </Box>
    )
}
export default Contact;