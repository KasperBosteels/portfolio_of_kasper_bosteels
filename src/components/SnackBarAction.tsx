import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
interface closeBarProps {
    handleClose:()=>void
}
const closeBar = ({handleClose}:closeBarProps)=>{
    return (
        <>
        <IconButton 
            size="small"
            color="inherit"
            onClick={handleClose}>
                <CloseIcon fontSize="small"/>
            </IconButton>
        </>
    )
}
export default closeBar