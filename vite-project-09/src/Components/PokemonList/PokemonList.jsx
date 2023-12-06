import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
export default function PokemonList() {
  const [pokemonlist, setpokemonlist] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  async function downloadlist() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemonResult = response.data.results;
    // console.log(response.data);
    const pokemonResultPromise = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemondata = await axios.all(pokemonResultPromise);
    // console.log(pokemondata);
    const res = pokemondata.map((datas) => {
      const pokemon = datas.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types,
      };
    });
    // console.log(res);
    setpokemonlist(res);
    setisLoading(false);
  }
  useEffect(() => {
    downloadlist();
  }, []);

  return (
    <div>
      {isLoading
        ? "Loading...."
        : pokemonlist.map((p) => (
            <Pokemon name={p.name} imge={p.image} key={p.id} />
          ))}
    </div>
  );
}
