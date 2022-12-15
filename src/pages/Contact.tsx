import { useState } from "react"
import Button from "@mui/material/Button"
import sendEmail,{ sendEmailProps } from "../services/sendEmail"
import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
const Contact = ()=>{
const [name,setName] = useState("")
const [topic,setTopic] = useState("")
const [message,setMessage] = useState("")
const [email, setEmail] = useState("")
const onSubmit=()=>{
  const tosend:sendEmailProps = {name:name,email:email,topic:topic,message:message}
 sendEmail(tosend)

}

return (<>
    <Form style={{margin:"auto", marginTop:"5%", width:"50%"}} id='contact_form'>
     <InputGroup className="mb-3">
        <Form.Control
          name="name"
          placeholder="Your Name"
          aria-label="name"
          aria-describedby="basic-addon1"
          onChange={(event)=>{setName(event.target.value)}}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
        name="email"
          placeholder="Your email"
          aria-label="email"
          aria-describedby="basic-addon2"
          onChange={(event)=>setEmail(event.target.value)}
          />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
        name="topic"
          placeholder="Topic"
          aria-label="topic"
          aria-describedby="basic-addon3"
          onChange={(event)=>{setTopic(event.target.value)}}
        />
      </InputGroup>

      <InputGroup>
        <Form.Control 
        name="message"
        placeholder="Message" 
        as="textarea" 
        aria-label="With textarea" 
        onChange={(event)=>{setMessage(event.target.value)}}
        />
      </InputGroup>
      {name.length > 0 && topic.length > 0 && message.length && email.length > 0 ? (
         <Button sx={{marginTop:20}} variant="success" onClick={()=>{onSubmit()}} active>Submit</Button>
      ) : (
        <Button sx={{marginTop:20}} variant="danger" disabled>Fill in all fields</Button> 
      )}
     

      </Form>
    </>)
}
export default Contact;