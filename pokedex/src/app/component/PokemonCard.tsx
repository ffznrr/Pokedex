"use client";
import handleDelete from "../action";
import { PokemonType } from "../page";
import Link from "next/link";

const PokemonCard = ({ pokemon }: { pokemon: PokemonType }) => {
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
    <>
      <div className="card bg-base-100 w-72 gap-2 shadow-xl my-5">
        <figure>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
            height={200}
          />
        </figure>
        <div className="card-body">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="card-title">{pokemon.name}</h2>
            </div>
            <div className="flex justify-end">{buttonType(pokemon.type)}</div>
          </div>
          <p>{pokemon.description}</p>
          <div className="card-actions justify-start">
            <div
              className=" btn badge bg-red-300 text-red-500 px-2 py-1"
              onClick={() => handleDelete(pokemon.id)}
            >
              Delete
            </div>
            <Link href={`/pokemon/${pokemon.id}`}>
              <div className="btn">Details</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
