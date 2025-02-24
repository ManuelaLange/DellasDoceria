import CaixadeDocinho from "../img/Caixadedocinhos.png";

export function BoxCandy() {
  return (
    <div className="relative w-full h-[650px] my-20 px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-3/5 h-full mx-auto "
        style={{
          backgroundImage: `url(${CaixadeDocinho.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
        }}
      />

      {/* Overlay Text Box */}
      <div className="relative z-10 flex items-center justify-end h-full px-20">
        <div className="bg-white/90 rounded-lg p-8 max-w-md shadow-lg">
          <h2 className="font-title text-[#8B4513] text-3xl mb-4">
            Caixinha de doces
          </h2>
          <p className="font-text text-gray-700 mb-4">
            Um novo conceito de doces para tornar seu momento único.
          </p>
          <span className="font-text font-semibold text-[#8B4513]">Valor</span>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-end gap-3">
              <span className="font-text text-[#8B4513]">4 sabores</span>
              <span className="font-text text-[#8B4513]">6 sabores</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <span className="font-text font-semibold text-[#8B4513]">
                Doces tradicionais
              </span>
              <div className="flex flex-row gap-10">
                <span className="font-title text-[#8B4513]">R$ 15</span>
                <span className="font-title text-[#8B4513]">R$ 22</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <span className="font-text font-semibold text-[#8B4513]">
                Doces especiais
              </span>
              <div className="flex flex-row gap-10 ">
                <span className="font-title text-[#8B4513]">R$ 18</span>
                <span className="font-title text-[#8B4513]">R$ 25</span>
              </div>
            </div>
          </div>

          <p className="font-text text-sm mt-4">
            Você pode encomendar a sua através dos nossos{" "}
            <a href="#contatos" className="text-[#FF7F50] hover:underline">
              contatos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
