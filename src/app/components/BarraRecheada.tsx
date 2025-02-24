"use client";
import Image from "next/image";
import barraRecheada from "../img/barraRecheada.png";

interface FlavorProps {
  name: string;
  price: number;
}

const MenuItem = ({ name, price }: FlavorProps) => (
  <div className="group transition-all duration-300 hover:bg-[#8b45131a] rounded-lg p-2 -mx-2">
    <div className="flex flex-row justify-between items-center">
      <p className="font-text group-hover:font-medium transition-all">{name}</p>
      <p
        className="font-title text-[#8B4513] font-semibold 
        group-hover:scale-110 transition-transform"
      >
        R${price}
      </p>
    </div>
    <hr
      className="border-[#8B4513] border-1 w-full border-dashed mb-2 
      group-hover:border-solid transition-all"
    />
  </div>
);

export default function BarraRecheada() {
  const flavors: FlavorProps[] = [
    { name: "Brigadeiro", price: 24 },
    { name: "Casadinho", price: 24 },
    { name: "Ninho com nutella", price: 24 },
    { name: "Kinder", price: 24 },
    { name: "Ovomaltine", price: 24 },
    { name: "Frutas vermelhas", price: 24 },
    { name: "Morango", price: 24 },
    { name: "Pistache", price: 24 },
    { name: "Cereja", price: 24 },
  ];

  return (
    <div
      className="flex flex-col md:flex-row mx-auto max-w-5xl rounded-xl 
      bg-[#ffffff7c] backdrop-blur-sm items-center gap-10 px-6 md:px-10 py-6 
      hover:bg-[#ffffffaa] transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src={barraRecheada}
          height={425}
          width={470}
          alt="Barra recheada"
          className="rounded-xl "
        />
        <div className="border-2 border-dashed border-[#8B4513] w-max rounded-xl p-2">
          <span className="font-text p-3">Todas as barras tem 250g</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-2/4">
        {flavors.map((flavor, index) => (
          <MenuItem key={index} {...flavor} />
        ))}
      </div>
    </div>
  );
}
