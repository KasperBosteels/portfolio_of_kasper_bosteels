import {send , init} from "emailjs-com";
const serviceid = "service_3y08h2q"
const templateid = "template_010a9y9"
const userid = "ZQHLD7WBIh56H208r"
export interface sendEmailProps {
    name:string,
    email:string,
    topic:string,
    message:string
};
const sendEmail =async  (content:sendEmailProps)=>{
    const tosend = {
        name:content.name,
        email:content.email,
        topic:content.topic,
        message:content.message
    };
    try{
    init(userid)
    await send(serviceid,templateid,tosend)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }catch(error){
        console.log(error)
    }finally{
        console.log("mail should be send")
    }
}
export default sendEmail;