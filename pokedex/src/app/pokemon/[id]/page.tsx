export interface PokemonType {
  id: number;
  name: string;
  type: string;
  description: string;
  weight: string;
  image: string;
}

const fethPokemonById = async (id: string) => {
  const fetchingId = await fetch(`http://localhost:3001/pokemon/${id}`);
  const response = await fetchingId.json();
  return response as PokemonType;
};

const PageDetailPokemon = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const pokemon = await fethPokemonById(id);

  const buttonType = (type: string) => {
    if (pokemon.type === "water") {
      return (
        <>
          <h2
            className={`h-full bg-blue-200 px-3 rounded-xl font-bold text-center text-blue-500`}
          >
            {pokemon.type}
          </h2>
        </>
      );
    } else if (pokemon.type === "fire") {
      return (
        <>
          <h2
            className={`h-full bg-red-200 px-3 rounded-xl font-bold text-red-700 text-center`}
          >
            {pokemon.type}
          </h2>
        </>
      );
    } else if (pokemon.type === "grass") {
      return (
        <>
          <h2
            className={`h-full bg-green-200 px-3 rounded-xl font-bold text-center text-green-700`}
          >
            {pokemon.type}
          </h2>
        </>
      );
    }
  };
  return (
    <div className="w-[970px] h-[450px] bg-slate-50 rounded-xl shadow-lg">
      <div className="p-5">
        <h1 className="">Detail Pokemon</h1>
        <p className="text-slate-300 mt-3">Detail of a Pokemon</p>
      </div>
      <hr />
      <div className="flex">
        <img
          src={pokemon.image}
          alt=""
          width={350}
          height={300}
        />
        <div>
          <div className="p-5 flex w-full">
            <div>
              <h1 className="font-semibold text-slate-300 mb-3 mr-7">
                Pokemon Name
              </h1>
              <h1>{pokemon.name}</h1>
            </div>
            <div>
              <h1 className="font-semibold text-slate-300 mb-3 mr-7">
                Pokemon Weight
              </h1>
              <h1>{pokemon.weight}</h1>
            </div>
            <div>
              <h1 className="font-semibold text-slate-300 mb-3 mr-7">
                Pokemon Type
              </h1>
              <h1>{buttonType(pokemon.type)}</h1>
            </div>
          </div>
          <div className="m-5">
            <h1 className=" font-semibold text-slate-300 mb-3 mr-7">
              Pokemon Description
            </h1>
            <h1>{pokemon.description}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetailPokemon;
