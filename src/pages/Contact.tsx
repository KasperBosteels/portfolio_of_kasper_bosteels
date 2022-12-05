import { useState, useContext } from "react";
import {InputGroup,Form, Button} from "react-bootstrap"
import sendEmail,{ sendEmailProps } from "../services/sendEmail";
import { modeDataContext } from "./Layout";
const Contact = ()=>{
const {theme} = useContext(modeDataContext)
const [name,setName] = useState("");
const [topic,setTopic] = useState("");
const [message,setMessage] = useState("");
const [email, setEmail] = useState("");
const onSubmit=()=>{
  const tosend:sendEmailProps = {name:name,email:email,topic:topic,message:message}
  console.log(tosend)
  sendEmail(tosend);
}

return (<>
    <Form style={{marginBottom:50,marginTop:50, width:"50%"}} id='contact_form'>
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
         <Button style={{marginTop:20}}variant="success" onClick={()=>{onSubmit()}} active>Submit</Button>
      ) : (
        <Button style={{marginTop:20}}variant="danger" disabled>Fill in all fields</Button> 
      )}
     

      </Form>
     
    </>)
}
export default Contact;