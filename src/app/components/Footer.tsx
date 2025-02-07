import Image from "next/image";
import logo from "../img/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import { TbPointFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#ff7f509c] h-20 flex items-center justify-between px-8">
      <div className="flex flex-row justify-between w-full items-center gap-2">
        <Image src={logo} alt="logo" width={60} height={60} />
        <div className="flex flex-row items-center gap-3 font-text text-white">
          <p>Produtos</p>
          <TbPointFilled />
          <p>Sobre nós</p>
          <TbPointFilled />
          <p>Contato</p>
          <TbPointFilled />
          <p>Nossas Clientes</p>
        </div>
        <div className="flex flex-row gap-2">
          <FaInstagram
            color="white"
            className="w-10 h-10 p-2 bg-[#8B4513] rounded-full"
          />
          <HiOutlinePhone
            color="white"
            className="w-10 h-10 p-2 bg-[#8B4513] rounded-3xl"
          />
        </div>
      </div>
    </footer>
  );
}
