import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const handleAdd = async (formData: FormData) => {
  "use server";
  const name = formData.get("name");
  const description = formData.get("description");
  const weight = formData.get("weight");
  const image = formData.get("image");
  const type = formData.get("type");

  if (!name && !description && !weight && !image && !type) {
    return redirect(
      "http://localhost:3000/create-pokemon?error=Please fill all the field",
    );
  }

  if (!name) {
    return redirect(
      "http://localhost:3000/create-pokemon?error=Name is Required",
    );
  }

  if (!description) {
    return redirect(
      "http://localhost:3000/create-pokemon?error=Description is Required",
    );
  }
  if (!weight) {
    return redirect(
      "http://localhost:3000/create-pokemon?error=Weight is Required",
    );
  }
  if (!image) {
    return redirect(
      "http://localhost:3000/create-pokemon?error=Image is Required",
    );
  }

  if (!type) {
    return redirect(
      "http://localhost:3000/create-pokemon?error=Type is Required",
    );
  }

  const fetchData = await fetch("http://localhost:3001/pokemon");
  const result = await fetchData.json();
  const output = result.length + 1;

  let hasil = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < characters.length; i++) {
    hasil += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const body = {
    id: hasil,
    name,
    description,
    weight,
    image,
    type,
  };

  const response = await fetch("http://localhost:3001/pokemon", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/");
  redirect("/");
};

export default handleAdd;
