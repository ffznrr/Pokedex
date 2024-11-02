"use client";
import { useSearchParams } from "next/navigation";

const ClientFlashComponent = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  return (
    <div>
      {errorMessage && (
        <p className="bg-red-300 animate-bounce w-full h-10 text-center font-bold text-2xl">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default ClientFlashComponent;
