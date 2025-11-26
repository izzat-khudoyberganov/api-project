import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    setLoading(true);
    e.preventDefault();
    const timer = setTimeout(() => {
      toast("Event has been created", {
        position: "top-center",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      setLoading((prev) => prev != prev);
      return clearTimeout(timer);
    }, 1000);
  }

  return (
    <footer className="mt-[98px] pt-11 pb-7 bg-gray-200">
      <div className="container">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-sm w-[250px]">
              Подпишитесь на нашу рассылку и узнавайте о акция быстрее
            </h3>

            <form className="flex items-center" onSubmit={onSubmit}>
              <input
                type="email"
                placeholder="Введите ваш e-mail:"
                name="email"
                required
                className="bg-white py-2 px-3 placeholder:font-normal placeholder:text-sm"
              />
              <button
                type="submit"
                className="py-3 px-4 bg-[rgba(28,98,205,1)] text-white text-xs font-semibold uppercase disabled:bg-blue-400"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  " Отправить"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
