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
import BolodePote from "./components/BolodePote";
import BarraRecheada from "./components/BarraRecheada";
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
              <button
                id="products"
                className="border-2 font-text text-white shadow-lg bg-[#FF7F50] border-[#FF7F50] rounded-xl px-4 py-2 hover:bg-white hover:text-[#FF7F50] hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out"
              >
                Veja nossos produtos
              </button>
              <button
                id="contact"
                className="border-2 font-text text-[#FF7F50] shadow-lg border-[#FF7F50] rounded-xl px-4 py-2 hover:bg-[#FF7F50] hover:text-white hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out"
              >
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
        <Title id="docinhos" title="Docinhos&nbsp;artesanais" />
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-36 pt-20 px-4 md:px-0">
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-24 items-center justify-between px-6 border-b border-[#8B4513] w-full">
              <p className="font-title text-center text-[#8B4513] text-3xl md:text-4xl">
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

          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-24 items-center justify-between px-6 border-b border-[#8B4513] w-full">
              <p className="font-title text-center text-[#8B4513] text-3xl md:text-4xl">
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
            <Candy name="Cereja" />
            <Candy name="Ferrero Rocher" />
            <Candy name="Charge" />
            <Candy name="Ninho com Nutella" />
            <Candy name="Doce de leite" />
            <Candy name="Churros" />
            <Candy name="Brûlée" />
            <Candy name="Pink Lemonede" />
            <Candy name="Pistache" />
            <Candy name="Nozes" />
            <Candy name="Confete" />
            <Candy name="Limão" />
            <Candy name="Maracujá" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 px-48 mt-10">
          <div className="flex flex-col justify-center items-center p-4 gap-4 border-[#8B4513] border-dashed border-2 rounded-xl">
            <p className="font-text pt-2">4 sabores por cento</p>
            <p className="font-text ">
              Personalizamos os docinhos, entre em{" "}
              <a href="#contatos" className="text-[#FF7F50] hover:underline">
                contato
              </a>{" "}
              para saber mais
            </p>
          </div>
        </div>

        <div>
          <CarouselImage />
        </div>
        <div>
          <BoxCandy />
        </div>
        <Title id="bolos" title="Bolos" />
        <div className="flex flex-row gap-5 flex-wrap justify-center items-center mb-10 max-w-screen-2xl mx-auto">
          <Cakes
            name="Bolo de brigadeiro"
            description="Massa pão de ló de chocolate com duas camadas de brigadeiro ao leite 50% cacau e pedaços de chocolate. Finalizado com brigadeiro ao leite."
            price15={140}
            price20={160}
          />
          <Cakes
            name="Bolo Prestígio"
            description="Massa pão de ló de chocolate com uma camada de brigadeiro ao leite 50% cacau e uma camada de brigadeiro de coco. Finalizado com brigadeiro ao leite."
            price15={140}
            price20={180}
          />
          <Cakes
            name="Bolo Kinder"
            description="Massa pão de ló branca com uma camada de brigadeiro ao leite 50% cacau, pedaços de kinder white e uma camda de creme kinder bueno. Finalizado com chantininho"
            price15={180}
            price20={220}
          />
          <Cakes
            name="Bolo Red Velvet"
            description="Massa red velvet com duas camadas de brigadeiro de cream cheese. Finalizado com creme de nata."
            price15={180}
            price20={220}
          />
          <Cakes
            name="Bolo 4 leites com morango"
            description="Massa pão de ló branco com duas camadas rechei 4 leites e morango. Finalizado com creme de nata ou chantininho."
            price15={180}
            price20={220}
          />
          <Cakes
            name="Bolo Maracujá"
            description="Massa pão de ló branca com duas camadas de brigadeiro ao leite 50% cacau e uma camada de brigadeiro de maracujá. Finalizado com chantininho."
            price15={140}
            price20={180}
          />
          <Cakes
            name="Bolo de ninho com morango e coco"
            description="Massa pão de ló branca com uma camada de brigadeiro de coco e uma camada de brigadeiro de ninho com morango. Finalizado com chantininho."
            price15={160}
            price20={200}
          />
          <Cakes
            name="Bolo de nata com morango e brigadeiro branco"
            description="Massa pão de ló branca com uma camada de brigadeiro branco e uma camada de nata com morango. Finalizado com creme de nata."
            price15={180}
            price20={220}
          />
          <Cakes
            name="Bolo de coco e doce de leite"
            description="Massa pão de ló branca com uma camada de brigadeiro branco de coco e uma camada de brigadeiro de doce de leite. Finalizado com chantininho."
            price15={140}
            price20={180}
          />
          <Cakes
            name="Bolo meineira"
            description="Massa pão de ló branca com duas camadas de brigadeiro branco, abacaxi e coco."
            price15={160}
            price20={200}
          />
          <Cakes
            name="Bolo floresta negra"
            description="Massa pão de ló de chocolate com uma camada de brigadeiro ao leite 50% cacau e uma camada de creme de nata e pedaços de cereja de leite. Finalizado com brigadeiro ao leite e creme de nata."
            price15={180}
            price20={220}
          />
        </div>
        <Title id="bolos-de-pote" title="Bolo&nbsp;de&nbsp;pote" />
        <div className="flex flex-row gap-10 flex-wrap justify-center items-center mb-10">
          <BolodePote
            name="Bolo brigadeiro branco"
            description="Bolo de pote com recheio de brigadeiro branco. Uma massa super úmida e macia"
            price={17}
          />
          <BolodePote
            name="Bolo 4 leites"
            description="Bolo de massa branca com um recheio cremoso de 4 leites e morangos frescos. Uma explosão de sabores"
            price={17}
          />
          <BolodePote
            name="Bolo mineira"
            description="Bolo mineira com massa branca e um recheio saboroso de abacaxi e coco"
            price={17}
          />
          <BolodePote
            name="Bolo prestígio"
            description="Bolo de prestígio com recheio de coco, intercalado com uma massa super fofinha de chocolte"
            price={17}
          />
        </div>
        <Title id="bombom-de-pote" title="Bombom&nbsp;de&nbsp;pote" />
        <Title id="barra-recheada" title="Barras&nbsp;recheadas" />
        <BarraRecheada />
        <Title id="datas-comemorativas" title="Datas&nbsp;comemorativas" />

        <Title id="sobre-nos" title="Sobre&nbsp;nós" />
        <AboutUs />
        <Title id="contato" title="Contato" />
        <Contact />
        <Title id="nossas-clientes" title="Nossas&nbsp;clientes" />

        <div className="mb-20">
          <Clients />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// fazer parte das bombom de pote
// fazer parte dos feedback
// arrumar carrosel do feedback
// arrumar o footer
// Colocar link no instagram.
// aumentar letra dos preços
// melhorar a arquitetura do codigo
