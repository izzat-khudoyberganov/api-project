import { useState } from "react";
import { Button } from "./ui/button";

const Search = () => {
  const [placeholderText, setPlaceholderText] = useState<string>("марку");

  function handlePlaceholderText(text: string): void {
    setPlaceholderText(text);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Add your search logic here
  }

  return (
    <section className="mt-20">
      <div className="container ">
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center">
            <Button
              onClick={() => handlePlaceholderText("номер")}
              variant={"ghost"}
            >
              Поиск по номеру
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => handlePlaceholderText("марку")}
            >
              Поиск по марке
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => handlePlaceholderText("названию товара")}
            >
              Поиск по названию товара
            </Button>
          </div>

          <form className="flex items-center w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-[90%] bg-gray-200 py-4 px-5 rounded-tl-sm rounded-bl-sm outline-none"
              placeholder={`Введите ${placeholderText}`}
            />
            <button type="submit" className="py-4 px-10 bg-[rgba(28,98,205,1)] text-white uppercase font-bold">искать</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
