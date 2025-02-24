import imageDoces from "../img/doces.png";
import Image from "next/image";

interface BolodePoteProps {
  name: string;
  description: string;
  price: number;
}
export default function BolodePote({
  name,
  description,
  price,
}: BolodePoteProps) {
  return (
    <div className="bg-[#ffffff7c] backdrop-blur-sm max-w-sm md:max-w-md h-[450px] p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col items-center gap-5 md:gap-8 border border-[#8B4513]/20">
      <div className="w-full flex justify-center transform hover:scale-105 transition-transform duration-300">
        <Image
          src={imageDoces}
          alt="doces"
          width={200}
          height={200}
          className="max-w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
        <h2 className="font-title text-[#8B4513] text-lg md:text-4xl border-b-2 border-[#8B4513]/30 w-full text-center md:text-left pb-2">
          {name}
        </h2>
        <p className="font-text text-gray-700 text-sm md:text-base text-center md:text-left leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <span className="font-text text-[#8B4513] font-semibold">Valor</span>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <span className="font-title text-[#8B4513] text-base md:text-xl">
              R${price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
