import { Box, Typography } from "@mui/material";

const About = ()=>{
    return (
        <Box sx={{width:"90%" ,display:"flex",justifyContent:"center", alignContent:"center", paddingTop:10 , marginBottom:10}}>
            <Box sx={{maxWidth:900}}>
                <Typography variant="h5">Robonext stage</Typography>
                
                <Typography variant="h6" sx={{paddingTop:5}}>Beschrijving stage Functie</Typography>
                <Typography sx={{paddingTop:3}} variant="body1">De stage is binnen de ontwikkelafdeling van robonext. Ik zal deelnemen aan de
                ontwikkeling van echte software robots binnen klantenprojecten onder begeleiding van de
                senior RPA developers.</Typography>
                <Typography sx={{paddingTop:2}} variant="body1">Tijdens de stage zal de student volwaardig deel uitmaken van het ontwikkelteam van
                robonext. Eerst zal de student via een online opleiding de software tools aanleren waarmee
                gewerkt wordt (bijvoorbeeld UiPath, Microsoft Power Automate). Van zodra de student de
                RPA ontwikkeltool voldoende beheerst, zal de student onder begeleiding van senior
                robonext collega's deelnemen aan echte ontwikkelopdrachten bij robonext klanten. Typische
                ontwikkelingen zijn het implementeren van software robots voor het automatiseren van
                repetitieve businessprocessen, zoals orders of facturen verwerken. De student zal de
                software robot programmeren in de testomgeving van de eindklant en deelnemen aan het
                testen en in productie brengen. Doorheen het project zal de student ook interageren met
                klanten, bijvoorbeeld door deel te nemen aan kick off meetings, trainingen en project follow
                up meetings</Typography>

                <Typography variant="h6" sx={{paddingTop:5}}>Basis informatie bedrijf</Typography>
                <Typography variant="body1"sx={{paddingTop:3}}>adress: Vestinglaan 57, 2650 Edegem</Typography>
                <Typography variant="body1">locatie kantoor: Op ongeveer 100 meter van de parking vind je aan de linkerkant een pad dat naar de ingang van het Bolwerk leidt.
                Het kantoor is op de eerste verdieping: ga de trap op, dan naar links
                </Typography>
                <img width={600} style={{borderRadius:".4rem", borderWidth:0, borderStyle:"solid"}} src="./howtogettotheoffice.png" alt="./logo192.png"/>

                <Typography variant="h6" sx={{paddingTop:5}}>Basis informatie Student</Typography>
                <Typography variant="body1"sx={{paddingTop:3}}>naam: Kasper Bosteels</Typography>
                <Typography variant="body1">gsm: 0491304548</Typography>


            </Box>
        </Box>
    );

}
export default About;