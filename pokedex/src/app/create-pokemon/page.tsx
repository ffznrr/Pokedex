import ClientFlashComponent from "../component/ClientFlashComponent";
import handleAdd from "./action";

const CreatePokemonPage = () => {
  return (
    <>
      <div className="w-full bg-slate-300 p-5">
        <div>
          <h1 className="font-bold text-2xl mb-5">Add New Pokemon</h1>
          <ClientFlashComponent />
          <form action={handleAdd}>
            <label className="text-2xl">Name</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              placeholder="Name"
              name="name"
            />
            <label className="text-2xl">Description</label>
            <textarea
              className="input input-bordered w-full mb-4"
              placeholder="Description"
              name="description"
            />
            <label className="text-2xl">Weight</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              placeholder="Weight"
              name="weight"
            />
            <label className="text-2xl">Image</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              placeholder="Image"
              name="image"
            />
            <label className="text-2xl">Type</label>
            <select
              name="type"
              className="select select-bordered w-full mb-4"
            >
              <option
                disabled
                selected
              >
                Type
              </option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
            </select>
            <button
              type="submit"
              className="w-full bg-yellow-200 py-3"
            >
              Add New Pokemon
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePokemonPage;
