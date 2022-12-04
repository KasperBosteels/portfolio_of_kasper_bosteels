import { useState } from "react";
import {InputGroup,Form, Button} from "react-bootstrap"
const Contact = ()=>{
const [name,setName] = useState("");
const [topic,setTopic] = useState("");
const [message,setMessage] = useState("");
const [email, setEmail] = useState("");

return (<>
    <Form style={{marginTop:50, width:"80%"}} id='contact_form'>
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
         <Button type="submit" style={{marginTop:20, backgroundColor:"rgba(50,200,0,1.0)"}} onClick={()=>{console.log("test")}}>Send</Button>
      ) : (
        <Button type="submit" style={{marginTop:20, backgroundColor:"rgba(100,0,0,1.0)"}}>Fill in all fields</Button> 
      )}
     

      </Form>
     
    </>)
}
export default Contact;