import { Text } from "../../components/Text";
import { useState, useEffect } from 'react';
import { api } from "../../services/api";

export function Dashboard() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    async function getItems() {
      const { data } = await api.get('/pokemon');
      
      // Com o Promise.all teremos as respostas muito mais rápido
      const resp = await Promise.all(data.results.map(item => api.get(item.url)))
      const format = resp.map(req => req.data);
      
      setPokemon(format);
    }
    getItems();

  }, []);

  console.log(pokemon);

  return (
    <div>
      <Text as="h1">Dashboard</Text>
      <Text>Search for Pokémon by nome or using the National Pokédex number</Text>
    
      {
        // Se pokemon tiver algo dentro ai renderiza, senão não tiver nada
        // dentro não tem como renderizar
        // OBS: devemos usar () do que {}
        pokemon.length > 0 && pokemon.map((item) => (
          <div key={item.id}>
            {item.name}
            <img src={item.sprites.front_default} alt={item.name} />
          </div>
          
        ))
      }
    </div>
  )
}