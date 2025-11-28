import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const FooterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

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
  );
};

export default FooterForm;
