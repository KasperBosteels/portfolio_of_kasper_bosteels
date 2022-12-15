import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import { useEffect, useState } from "react";
const DadJoke = () => {
  const [joke, setJoke] = useState("");
  const [favouritejoke, setvafjoke] = useState(
    localStorage.getItem("joke") ?? ""
  );
  const loadjoke = async () => {
    let result = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(result);
    let json = await result.json();
    setJoke(json.joke);
  };
  useEffect(() => {
    loadjoke();
  }, []);
  useEffect(()=>{
    localStorage.setItem("joke",favouritejoke)
  },[favouritejoke])
  return (
    <>
      <Box
        sx={{display:"grid", justifyContent:"center"}}
      >
        <Box>
        <h4>{joke}</h4>
        </Box>
        <Box>
        <Button
          variant="contained"
          sx={{margin:"1rem"}}
          value="load new joke"
          onClick={() => loadjoke()}
        >Load new</Button>
        
        <Button
          variant="contained"
          value="save joke"
          onClick={() => setvafjoke(joke)}
        >Save joke</Button>
        <Box>

          {favouritejoke ? (<><p>your favourite joke:</p><p>{favouritejoke}</p></>) : <></>}
        </Box>
        </Box>
      </Box>
    </>
  );
};
export default DadJoke;
