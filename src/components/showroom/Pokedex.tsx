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
  return (
    <>
      <Box>
        <Box sx={{display:"flex", justifyContent:"center"}}>
          <TextField
            label="Filter by Name"
            size="small"
            onChange={(e)=>setFilter(e.target.value)}/>
          </Box>
          <Box sx={{justifyContent:"center", display:"grid"}}>  
        {isloading ? (
          <CircularProgress sx={{margin:"2rem"}}/>
        ) : 
        (<>{pokemon.length > 0 ? (
          pokemon.filter((p)=>p.name.startsWith(inputFilter.toLowerCase())).map((p,i)=>
          (<p key={i}>{p.name.normalize()}</p>))
          ):(<></>)}</>)}
      </Box>
      <Box sx={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
      <TextField
      type="number"
      label="Limit pokemon"
      size="small"
      InputLabelProps={{shrink:true}}
      sx={{borderRadius:0}}
      onChange={(e)=>setLimitValue(parseInt(e.target.value ))}
      />
      <Button variant="contained" sx={{borderRadius:0}} onClick={()=>getPokemon()}>Set Limit</Button>
      </Box>
      </Box>
    </>
  );
};

export default Pokedex;
