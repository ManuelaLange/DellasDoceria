import imageDoces from "../img/doces.png";
import Image from "next/image";

interface CakesProps {
  name: string;
  description: string;
  price15: number;
  price20: number;
}
export default function Cakes({
  name,
  description,
  price15,
  price20,
}: CakesProps) {
  return (
    <div className=" bg-[#ffffff7c] mx-20 max-w-screen-xl mt-10 p-9 shadow-lg rounded-lg flex flex-row items-center gap-10 max-h-96">
      <div className="flex flex-row">
        <Image src={imageDoces} alt="doces" />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h2 className="font-title text-[#8B4513] text-4xl mb-4">{name}</h2>
        <p className="font-text text-gray-700">{description}</p>
        <div className="flex flex-row  items-center justify-start gap-28 w-full ">
          <span className="font-text text-[#8B4513] font-semibold">Valor</span>
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col gap-2">
              <span className=" text-[#8B4513] font-semibold font-text">
                15 cm
              </span>
              <span className="font-title  text-[#8B4513]">R$ {price15}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-text font-semibold text-[#8B4513]">
                20 cm
              </span>
              <span className="font-title text-[#8B4513]">R$ {price20}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
