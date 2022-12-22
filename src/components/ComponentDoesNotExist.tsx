import { Box, Typography } from "@mui/material";

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