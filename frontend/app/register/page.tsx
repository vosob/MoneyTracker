import { IoMdLock } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { Logo } from "../components/Logo/Logo";
import { BsFillPersonFill } from "react-icons/bs";

export default function register() {
  return (
    <div className="h-screen w-screen bg-linear-to-b from-[#294045] to-[#1E2F33] flex items-center justify-center">
      <div className="bg-(--main-light-green) flex flex-col gap-5 px-16 pt-12 pb-24 rounded-xl">
        <Logo />
        <Input
          icon={<BsFillPersonFill size={20} />}
          placeholder="Name"
          variant="withIcon"
        />

        <Input
          icon={<IoMail size={20} />}
          placeholder="E-mail"
          variant="withIcon"
        />
        <Input
          icon={<IoMdLock size={20} />}
          placeholder="Password"
          variant="withIcon"
        />
        <Input
          icon={<IoMdLock size={20} />}
          placeholder="Confirm password"
          variant="withIcon"
        />

        <Button>Log in</Button>
        <Button variant="clear">Register</Button>
      </div>
    </div>
  );
}
