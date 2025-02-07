import Header from "./components/Header";
import Title from "./components/Title";
import { Candy } from "./components/Candy";
import image from "./img/doces4.png";
import { CarouselImage } from "./components/CarouselImage";
import Cakes from "./components/Cakes";
import Image from "next/image";
import { AboutUs } from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BoxCandy } from "./components/BoxCandy";
import { Clients } from "./components/Clients";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-full w-full">
        <div className="h-screen justify-center gap-28 flex flex-row ">
          <div className="flex flex-col max-w-lg  justify-center gap-24">
            <p className="font-title text-7xl text-[#8B4513]">
              Doces artesanais com amor
            </p>
            <div className="flex flex-row gap-4">
              <button className="border-2 font-text text-white shadow-lg bg-[#FF7F50] border-[#FF7F50] rounded-xl px-4 py-2">
                Veja nossos produtos
              </button>
              <button className="border-2 font-text text-[#FF7F50] shadow-lg border-[#FF7F50] rounded-xl px-4 py-2">
                Entre em contato
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={image}
              alt="doces"
              width={450}
              height={450}
              className="rounded-xl"
            />
          </div>
        </div>
        <Title title="Produtos" />
        <div className="flex flex-row justify-center gap-36 pt-20">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row gap-24 items-center justify-between px-6 border-b border-[#8B4513] ">
              <p className="font-title  justify-center text-[#8B4513] text-4xl">
                Doces tradicionais
              </p>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-center gap-2">
                  <p className="font-text font-semibold text-[#8B4513]">
                    Meio cento:{" "}
                  </p>
                  <p className="font-title text-[#8B4513] text-center">
                    R$ 75,00
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <p className="font-text font-semibold text-[#8B4513] text-center">
                    Cento:
                  </p>
                  <p className="font-title text-[#8B4513] text-center">
                    R$ 150,00
                  </p>
                </div>
              </div>
            </div>
            <Candy name="Brigadeiro" />
            <Candy name="Beijinho" />
            <Candy name="Coco Queimado" />
            <Candy name="Casadinho" />
            <Candy name="Moranguinho" />
            <Candy name="Brigadeiro branco" />
            <Candy name="Pestígio" />
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row gap-24 items-center justify-between px-6 border-b border-[#8B4513]  ">
              <p className="font-title text-[#8B4513] text-4xl">
                Doces especiais
              </p>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-center gap-2">
                  <p className="font-text font-semibold text-[#8B4513]">
                    Meio cento:{" "}
                  </p>
                  <p className="font-title text-[#8B4513] text-center">
                    R$ 95,00
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <p className="font-text font-semibold text-[#8B4513] text-center">
                    Cento:
                  </p>
                  <p className="font-title text-[#8B4513] text-center">
                    R$ 190,00
                  </p>
                </div>
              </div>
            </div>
            <Candy name="Brigadeiro" />
            <Candy name="Beijinho" />
            <Candy name="Coco Queimado" />
            <Candy name="Casadinho" />
            <Candy name="Moranguinho" />
            <Candy name="Brigadeiro branco" />
            <Candy name="Pestígio" />
            <Candy name="Moranguinho" />
            <Candy name="Brigadeiro branco" />
            <Candy name="Pestígio" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 px-48 mt-10">
          <div className="flex flex-col justify-center items-center p-4 gap-4 border-[#8B4513] border-dashed border-2 rounded-xl">
            <p className="font-text pt-2">4 sabores por cento</p>
            <p className="font-text ">
              Personalizamos os docinhos, entre em contato para saber mais
            </p>
          </div>
        </div>

        <div>
          <CarouselImage />
        </div>
        <div>
          <BoxCandy />
        </div>
        <div className="flex flex-row justify-center mb-10">
          <Cakes
            name="Bolo de brigadeiro"
            description="Massa pão de ló de chocolate com duas camadas de brigadeiro ao leite 50% cacau e pedaços de chocolate. Finalizado com brigadeiro ao leite."
            price15={140}
            price20={160}
          />
        </div>

        <Title title="Sobre&nbsp;nós" />
        <AboutUs />
        <Title title="Contato" />
        <Contact />
        <Title title="Nossas&nbsp;clientes" />
        <Clients />
        <div className="mb-20"></div>
        <div className="mb-20">
          <Clients />
        </div>
      </div>
      <Footer />
    </div>
  );
}
