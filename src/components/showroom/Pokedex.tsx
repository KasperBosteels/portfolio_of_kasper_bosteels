import { Typography } from "@mui/material";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";
interface IPokedex {
  limit: number;
}
interface Result {
  name: string;
  url: string;
}
const Pokedex = ({ limit = 10 }: IPokedex) => {
  const [pokemon, setPokmen] = useState<Result[]>([]);
  const [inputFilter,setFilter] = useState<string>("")
  const [limitValue,setLimitValue] = useState<number>(limit)
  const [isloading, setIsloading] = useState<boolean>(true);
  const getPokemon = async () => {
    setIsloading(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limitValue < 0 ? 0 : limitValue}`).then((res)=>{
    const resStringified = JSON.stringify(res.data.results)
    setPokmen(JSON.parse(resStringified))
    setIsloading(false)
    })
  };
  useEffect(() => {
    getPokemon();
  },[]);
  const setLimit = (value:string)=>{
    const v = parseInt(value)
    if(!isNaN(v)&& v > 0){
      setLimitValue(v)
    }else{
      setLimitValue(1);
    }
  }
  return (
    <>
      <Box>
        <Box 
        sx={{
          display:"flex",
          alignItems:"center", 
          flexDirection:"column"}}>
        <Box 
          sx={{
            display:"flex", 
            justifyContent:"center", 
            width:"13rem"}}>
          <TextField
            label="Filter by Name"
            size="small"
            onChange={(e)=>setFilter(e.target.value.toLowerCase())}/>
        </Box>
        <Box 
          sx={{display:"flex", 
          justifyContent:"center", 
          marginTop:"1rem", 
          width:"13rem"}}>
          <TextField
            type="number"
            label="Limit pokemon"
            size="small"
            InputLabelProps={{shrink:true}}
            sx={{borderRadius:0}}
            onChange={(e)=>setLimit(e.target.value)}
            onKeyDown={(k)=>{if(k.key ==="Enter")getPokemon()  }}
            />
          <Button 
            variant="contained" 
            sx={{borderRadius:0, height:"2.5rem"}} 
            onClick={()=>getPokemon()}>
              Set Limit
          </Button>
        </Box>
        </Box>
        <Box 
            sx={{
              display:"flex", 
              marginTop:"2rem",
              minWidth:500,
              maxWidth:800,
              maxHeight:200,

              }}>  
            {isloading ? (
          <CircularProgress sx={{margin:"2rem"}}/>
        ) : 
        (<Box style={{
          columnCount: pokemon.length > 0 ?Math.ceil(pokemon.filter((p)=>p.name.startsWith(inputFilter)).length / 30):0,
          minWidth:"fit-content",
          textAlign:"start",
          margin:"auto",
          }}>
          {pokemon.length > 0 ? (
          pokemon.filter((p)=>p.name.startsWith(inputFilter)).map((p,i)=>
          (<Typography 
            sx={{
              minWidth:"fit-content",
              paddingBottom:".3rem"}} 
              key={i}>{p.name.normalize()}
          </Typography>))
          ):(<></>)}</Box>)}
        </Box>
      </Box>
    </>
  );
};
export default Pokedex;