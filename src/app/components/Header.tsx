import Image from "next/image";

export default function Header() {
  return (
    <header className=" fixed top-0 left-0 w-full h-16 bg-[#FF7F50] flex items-center justify-between px-8 z-50">
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
            Sobre nós
          </li>
          <li className="cursor-pointer hover: font-text font-semibold">
            Contato
          </li>
          <li className="cursor-pointer hover: font-text font-semibold">
            Nossas clientes
          </li>
        </ul>
      </nav>
    </header>
  );
}
