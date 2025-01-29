import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import whatsapp from "../img/whatsapp.png";

export default function Contact() {
  return (
    <div className="flex flex-col my-10 px-20">
      <div className="flex flex-row gap-36 mx-auto justify-center mb-10 text-[#8B4513]">
        <div className="flex flex-col gap-7">
          <p className="text-center font-title text-4xl text-[#8B4513]">
            Localização
          </p>
          <div className="flex flex-row gap-2 items-center justify-center">
            <IoLocationOutline color="#8B4513" className="w-8 h-8" />
            <p className="text-center font-text text-lg">
              São José - Santa Catarina
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-center font-title text-4xl text-[#8B4513]">
            Telefone
          </p>
          <div className="flex flex-row gap-2 items-center justify-center">
            <HiOutlinePhone color="#8B4513" className="w-8 h-8" />
            <p className="text-center font-text text-lg">48 99818-8916</p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-center font-title text-4xl text-[#8B4513]">
            Redes sociais
          </p>
          <div className="flex flex-row gap-2 items-center justify-center">
            <FaInstagram color="#8B4513" className="w-8 h-8" />
            <p className="text-center font-text text-lg">@della_sdoceria</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-6">
        <button className="bg-[#FF7F50] font-text border-2  text-white px-4 py-3 rounded-xl flex flex-row gap-2 justify-center items-center">
          <Image src={whatsapp} alt="Whatsapp" width={30} height={30} />
          Entre em contato
        </button>
      </div>
    </div>
  );
}
