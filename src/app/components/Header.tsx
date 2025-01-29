import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-16 bg-[#FF7F50] flex items-center justify-between px-8">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-11 text-white">
          <li className="cursor-pointer hover: font-text font-semibold">
            Produtos
          </li>
          <li className="cursor-pointer hover: font-text font-semibold">
            Eventos
          </li>
          <li className="cursor-pointer hover: font-text font-semibold">
            Sobre nós
          </li>
          <li className="cursor-pointer hover: font-text font-semibold">
            Onde estamos
          </li>
          <li className="cursor-pointer hover: font-text font-semibold">
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
