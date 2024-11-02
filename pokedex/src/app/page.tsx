import PokemonCard from "./component/PokemonCard";

export interface PokemonType {
  id: number;
  name: string;
  type: string;
  description: string;
  weight: string;
  image: string;
}

const fetchPokemon = async () => {
  const response = await fetch("http://localhost:3001/pokemon");

  if (!response.ok) {
    throw new Error("Network is Error");
  }

  const result = await response.json();
  return result as PokemonType[];
};

export default async function Home() {
  const pokemon = await fetchPokemon();

  return (
    <div>
      <div className="grid grid-cols-3">
        {pokemon.map((item) => (
          <PokemonCard
            pokemon={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
