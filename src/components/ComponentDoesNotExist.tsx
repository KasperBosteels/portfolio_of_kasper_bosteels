import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
export default function ComponentDoesNotExist(){
    return (
        <Box sx={{
            display:"flex", 
            justifyContent:"center", 
            verticalAlign:"center",
            margin:"10%"}}>
            <Typography>This Component Does not Exist</Typography>
        </Box>
    )
}