"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const handleDelete = async (id: number) => {
  try {
    console.log(id);

    const response = await fetch(`http://localhost:3001/pokemon/${id}`, {
      method: "DELETE",
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
  return redirect("/");
};

export default handleDelete;
