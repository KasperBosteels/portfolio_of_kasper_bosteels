import Container from "react-bootstrap/Container"
const HomePage = ()=>{
    return (
        <>
        <div style={{display:"flex", flexDirection:"column"}}>
        <Container style={{border: 2, borderColor:'rgba(0,100,0,0.3)', borderStyle:"solid", borderRadius:25, minHeight:500, width:"50%"}}>
            <div style={{display:"flex", flexDirection:"row" }}>
            <p style={{paddingRight:5}}>portfolio of</p><h2>Kasper Bosteels</h2>
            <div style={{float:"left"}}>
            <p>Hello,<br></br>I am a student at the Artesis Plantijn(AP). I am currently in my final year of my Graduates.
            <br></br>this website will initially server as a project i had to complete and later on as my own website.</p>
            </div>
            </div>
       </Container>
       </div>
        </>
    )
}
export default HomePage;