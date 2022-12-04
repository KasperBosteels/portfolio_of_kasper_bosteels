import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
interface components {
name:string,
description:string,
path:string,
}
const componenten:components[] = [
    {
        name:"Filtering",
        description:"This is a filtering component that filters a list depending on what is typed in a search box.",
        path:"./laboComponentent/Filtering"
    },
    {
        name:"Current time",
        description:"This is a clock that shows the current time wich is live updated.",
        path:"./laboComponeten/Time"
    },
    {
        name: "slot machine",
        description: "This is a Slot Machine with REAL money.",
        path :"./laboComponenten/Slotmachine"
    }
];
//todo: add navigation
const Componenten = ()=>{
    return (
        <>
        <div className="container">
            <h2>Componenten</h2>
            <div className="listContainer">
              <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {componenten.map((component,index)=>(
                <>
                    <tr>
                        <td>{component.name}</td>
                        <td>{component.description}</td>
                        <td><Button as="input" type="button" value="Open"/></td>
                    </tr>
                </>))}
                </tbody>
              </Table>
            </div>
        </div>
        </>
    )
}
export default Componenten;