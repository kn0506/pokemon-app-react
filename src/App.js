import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon.js";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      loadPokemon = (res.results);
      setLoading(false);
    };
    fetchPokemonData();
    console.log('test1')
  }, []);

    console.log('test2')

  let loadPokemon = (data) => {
    console.log('test3')
    let _pokemonData = Promise.all(
      data.map((pokemon) => {
        // let pokemonRecord = getPokemon(pokemon.url);
        console.log(pokemon);

        // return pokemonRecord;
      })
    );
  };

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <h1>ポケモンデータを取得しました</h1>
      )}
    </div>
  );
}

export default App;
