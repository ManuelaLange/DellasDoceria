"use client";
import Image from "next/image";
import { GiCupcake } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className=" fixed top-0 left-0 w-full h-16 bg-[#FF7F50] flex items-center justify-between px-8 z-50">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-11 text-white items-center">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent border-none cursor-pointer font-text font-semibold text-base">
                Produtos <IoIosArrowDown className="text-white text-xl" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white text-[#8B4513] font-text">
              <DropdownMenuLabel className="text-[#8B4513]">
                Produtos
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#8B4513]" />
              <DropdownMenuCheckboxItem
                onClick={() => {
                  window.location.href = "#docinhos";
                }}
                className="focus:bg-[#FF7F50] focus:text-zinc-100"
              >
                Docinhos
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onClick={() => {
                  window.location.href = "#bolos";
                }}
                className="focus:bg-[#FF7F50] focus:text-zinc-100"
              >
                Bolos
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onClick={() => {
                  window.location.href = "#bolos-de-pote";
                }}
                className="focus:bg-[#FF7F50] focus:text-zinc-100"
              >
                Bolos de pote
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onClick={() => {
                  window.location.href = "#bombom-de-pote";
                }}
                className="focus:bg-[#FF7F50] focus:text-zinc-100"
              >
                Bombom de pote
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onClick={() => {
                  window.location.href = "#barra-recheada";
                }}
                className="focus:bg-[#FF7F50] focus:text-zinc-100"
              >
                Barra recheada
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onClick={() => {
                  window.location.href = "#datas-comemorativas";
                }}
                className="focus:bg-[#FF7F50] focus:text-zinc-100"
              >
                Datas comemorativas
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <GiCupcake className="text-white text-xl" />

          <Button
            onClick={() => {
              window.location.href = "#sobre-nos";
            }}
            className="bg-transparent border-none cursor-pointer font-text font-semibold text-base"
          >
            Sobre nós
          </Button>
          <GiCupcake className="text-white text-xl" />
          <Button
            onClick={() => {
              window.location.href = "#contato";
            }}
            className="bg-transparent border-none cursor-pointer font-text font-semibold text-base"
          >
            Contato
          </Button>
          <GiCupcake className="text-white text-xl" />
          <Button
            onClick={() => {
              window.location.href = "#nossas-clientes";
            }}
            className="bg-transparent border-none cursor-pointer font-text font-semibold text-base"
          >
            Nossas clientes
          </Button>
        </ul>
      </nav>
    </header>
  );
}
