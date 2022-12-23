import { useEffect, useState } from "react"
import {Button, TextField} from "@mui/material"
import  Box  from "@mui/material/Box"
import SendIcon from "@mui/icons-material/Send"
interface sendMailProps {
    sendEmail:(name:string,email:string,topic:string,message:string)=>void
}
const EmailForm = ({sendEmail}:sendMailProps)=>{
    const [name,setName] = useState("")
    const [topic,setTopic] = useState("")
    const [message,setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [allowedToSend,setAllowedToSend]=useState(false)

useEffect(() => {
setAllowedToSend(name.length > 0 && topic.length > 0 && message.length && email.length > 0 ? true : false)
  return ()=>{}
}, [name,topic,message,email])

const handleClick=()=>{
    sendEmail(name,email,topic,message);
    setName("")
    setTopic("")
    setMessage("")
    setEmail("")
}
return (
    <Box 
    style={{
      display:"flex",
      flexDirection:"column",
      margin:"auto", 
      marginTop:"5%",
      rowGap:"1rem",
      
      width:"50%"}}
      >
        <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:"1rem"
        }}>

        <TextField
          required
          label="Your Name"
          sx={{backgroundColor:"rgba(0,0,0,0.1)"}}
          onChange={e=>setName(e.target.value)}
          value={name}/>
   
        <TextField
          required
          label="Your Email"
          sx={{backgroundColor:"rgba(0,0,0,0.1)"}}
          onChange={e=>setEmail(e.target.value)}
          value={email}/>

        <TextField
          required
          sx={{backgroundColor:"rgba(0,0,0,0.1)"}}
          label="Topic"
          onChange={e=>setTopic(e.target.value)}
          value={topic}/>
    <TextField 
    required
    multiline
    sx={{backgroundColor:"rgba(0,0,0,0.1)"}}
    minRows={4}
    maxRows={15}
    label="Message"
    onChange={e=>setMessage(e.target.value)}
    value={message}/>
    </Box>

    <Button 
      sx={{marginTop:5}}
      variant="outlined" 
      color={allowedToSend?"success":"error"}
      disabled={!allowedToSend}
      onClick={()=>{handleClick()}}
      endIcon={<SendIcon/>}
      >{allowedToSend?"Send Email":"Fill in all fields"}</Button>
  </Box>
)
}
export default EmailForm;