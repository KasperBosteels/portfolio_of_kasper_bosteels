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
  return (
    <>
      <div
        style={{
          borderRadius: 5,
          border: "solid",
          borderColor: "black",
          borderWidth: 3,
        }}
      >
        {favouritejoke ? <h3>{favouritejoke}</h3> : <h3>{joke}</h3>}
        <input
          type="button"
          value="load new joke"
          onClick={(event) => loadjoke()}
        />
        <input
          type="button"
          value="save joke"
          onClick={(event) => setvafjoke(joke)}
        />
      </div>
    </>
  );
};
export default DadJoke;
