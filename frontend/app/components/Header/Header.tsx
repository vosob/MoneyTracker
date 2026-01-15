import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className="px-6 pt-2 pb-5 flex justify-between items-center">
      <Logo textColor="white" />

      <ul className="flex gap-3 ">
        <li>
          <button>Name</button>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <button>Exit</button>
        </li>
      </ul>
    </header>
  );
};
