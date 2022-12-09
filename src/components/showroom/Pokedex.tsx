import { useEffect, useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";
interface IPokedex {
  limit: number;
}
interface Result {
  name: string;
  url: string;
}
const Pokedex = ({ limit = 151 }: IPokedex) => {
  const [pokemon, setPokmen] = useState<Result[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  useEffect(() => {
    const fetchFunction = async () => {
      let result = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );
      let json = await result.json();
      setPokmen(json);
      setIsloading(false);
    };
    fetchFunction();
  }, []);
  return (
    <>
      <div>
        {isloading ? (
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        ) : (
          pokemon.map((poke) => <p>{poke.name}</p>)
        )}
      </div>
    </>
  );
};

export default Pokedex;
