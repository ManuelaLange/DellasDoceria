export default function Title({ title }: { title: string }) {
  return (
    <div className="items-center flex flex-row justify-center">
      <hr className="w-full border-1 border-[#8B4513]" />
      <p className="font-title text-7xl text-[#8B4513] px-10">{title}</p>
      <hr className="w-full border-1 border-[#8B4513]" />
    </div>
  );
}
