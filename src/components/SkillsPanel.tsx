import { Typography, LinearProgress } from "@mui/material"
const SkillsPanel=()=>{
    return (
            <>
                <Typography>
                <div className="skilsComponent">
                <h2>Mijn skills</h2>
                <label style={{marginBottom:5}} className="logo"><a title="Ramaksoud2000 via Chris Williams, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:JavaScript-logo.png"><img width="32" alt="JavaScript-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/64px-JavaScript-logo.png"/></a></label><LinearProgress color="info" variant="determinate" value={70}/>
                <label className="logo"><a title="™/®Microsoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg"><img width="32" alt="Typescript logo 2020" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/32px-Typescript_logo_2020.svg.png"/></a></label><LinearProgress color="primary" variant="determinate" value={65}/>
                <label className="logo"><a title="Andres15alvarez, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Csharp_Logo.png"><img width="32" alt="Csharp Logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"/></a></label><LinearProgress color="secondary" variant="determinate" value={50}/>
                <label className="logo"><a title="Facebook, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:React-icon.svg"><img width="32" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/32px-React-icon.svg.png"/></a></label><LinearProgress color="info" variant="determinate" value={30}/>
                <label className="logo"><a title="www.python.org, GPL &lt;http://www.gnu.org/licenses/gpl.html&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg"><img width="32" alt="Python-logo-notext" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/32px-Python-logo-notext.svg.png"/></a></label><LinearProgress color="warning"variant="determinate" value={15}/>
                </div >
                </Typography>
            </>
    )
}
export default SkillsPanel;