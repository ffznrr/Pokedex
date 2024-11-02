import PokemonCard from "../component/PokemonCard";
import { PokemonType } from "../page";

const fetchDataByType = async (type: string) => {
  const response = await fetch(`http://localhost:3001/pokemon`);
  const result = await response.json();
  const arr: PokemonType[] = [];
  const data = result.map((item: PokemonType) => {
    item.type === type ? arr.push(item) : "";
  });

  return arr;
};

const PageType = async ({ params }: { params: { type: string } }) => {
  const { type } = params;
  const pokemonType = await fetchDataByType(type);

  return (
    <div className="grid grid-cols-3">
      {pokemonType.map((item) => (
        <PokemonCard pokemon={item} />
      ))}
    </div>
  );
};
export default PageType;
