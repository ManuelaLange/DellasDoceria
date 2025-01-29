export function Candy({ name }: { name: string }) {
  return (
    <div className="flex flex-col pl-2 w-full border-[#8B4513] border-dashed border-b gap-2">
      <p className="font-text w-full  pt-2">{name}</p>
    </div>
  );
}
