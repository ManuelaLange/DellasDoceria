import Image from "next/image";
import sobrenos2 from "../img/sobrenos2.png";
import aboutus3 from "../img/aboutus3.png";
import foto1 from "../img/foto1.png";

export function AboutUs() {
  return (
    <div className="flex flex-row px-20 gap-10 justify-center my-10">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 min-w-min">
          <Image
            src={foto1}
            alt="About us"
            width={260}
            height={320}
            className="rounded-lg object-cover"
          />
          <Image
            src={sobrenos2}
            alt="About us"
            width={260}
            height={180}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 min-w-min">
          <Image
            src={aboutus3}
            alt="About us"
            width={260}
            height={180}
            className="rounded-lg object-cover"
          />
          <Image
            src={foto1}
            alt="About us"
            width={260}
            height={320}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="max-w-lg flex items-center">
        <p className=" font-text m-0 p-2 text-[#8B4513] font-semibold items-center">
          Somos Dani e Thais fundadores da{" "}
          <span className="font-title text-[28px] text-[#FF7F50]">
            Dellas doceria
          </span>
          .<br />
          <br />
          Uma marca pensada e elaborada para trazer uma experiência incrível
          para quem prova nossos doces.
          <br />
          <br />
          Nos conhecemos desde a infância e dividíamos a vontade de empreender.
          Após algumas tentativas, tivemos a brilhante ideia de abrir uma
          doceria on-line.
          <br />
          <br />
          Foi{" "}
          <span className="font-title text-[#FF7F50] text-[28px]">
            Deus
          </span>{" "}
          que fez nosso caminho. Com muita dedicação e aperfeiçoamento, hoje,
          apresentamos os melhores doces.
          <br />
          <br />A{" "}
          <span className="font-title text-[#FF7F50] text-[28px]">
            Dellas
          </span>{" "}
          é a realização de um sonho duplo.
        </p>
      </div>
    </div>
  );
}
