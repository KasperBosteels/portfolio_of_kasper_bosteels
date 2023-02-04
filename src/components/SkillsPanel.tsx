import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { blue } from '@mui/material/colors';
const SkillsPanel=()=>{
    return (
            <>
                <Typography>
                <div className="skilsComponent">
                <h2>Mijn skills</h2>
                <label className="logo"><a title="Ramaksoud2000 via Chris Williams, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:JavaScript-logo.png"><img width="32" alt="JavaScript-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/64px-JavaScript-logo.png"/></a></label><LinearProgress color="info" variant="determinate" value={86}/>
                <label className="logo"><a title="W3C, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg"><img width="32" alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/32px-HTML5_logo_and_wordmark.svg.png"/></a></label><LinearProgress color="warning" variant="determinate" value={84}/>
                <label className="logo"><a title="™/®Microsoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg"><img width="32" alt="Typescript logo 2020" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/32px-Typescript_logo_2020.svg.png"/></a></label><LinearProgress color="primary" variant="determinate" value={65}/>
                <label className="logo"><a title="Rudloff, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg"><img width="32" alt="CSS3 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/32px-CSS3_logo_and_wordmark.svg.png"/></a></label><LinearProgress color="info" variant="determinate" value={60}/>
                <label className="logo"><a title="Andres15alvarez, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Csharp_Logo.png"><img width="32" alt="Csharp Logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"/></a></label><LinearProgress color="secondary" variant="determinate" value={50}/>
                <label className="logo"><a title="www.python.org, GPL &lt;http://www.gnu.org/licenses/gpl.html&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg"><img width="32" alt="Python-logo-notext" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/32px-Python-logo-notext.svg.png"/></a></label><LinearProgress color="warning"variant="determinate" value={15}/>
                </div >
                </Typography>
            </>
    )
}
export default SkillsPanel;