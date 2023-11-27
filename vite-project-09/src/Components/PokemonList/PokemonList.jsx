import { useEffect, useState } from "react";
import axios from "axios";
export default function PokemonList() {
  const [pokemonlist, setpokemonlist] = useState([]);

  async function downlodelist() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(response.data.results);
  }
  useEffect(() => {
    downlodelist();
  }, []);
  return <>shdd</>;
}
