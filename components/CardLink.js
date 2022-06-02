export default function CardLink() {
  return (
    <div className="flex flex-col items-center gap-y-2.5 transition hover:scale-105 cursor-pointer">
      <div className="bg-white h-20 w-20 rounded-full overflow-hidden border-4 border-primary-500">
        <img src="/logo.png" alt="" className="w-full h-auto" />
      </div>
      <span className="text-xs text-primary-400">Link Title</span>
    </div>
  );
}
