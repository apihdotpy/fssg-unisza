export default function AwardsUser() {
  return (
    <div className="group flex flex-col items-center gap-y-2 transition duration-300 hover:scale-110">
      <div className="flex justify-center items-center w-[90px] h-[90px] bg-gradient-to-r from-black via-yellow-700 to-yellow-500 rounded-full drop-shadow-md ">
        <div className="w-20 h-20 rounded-full bg-white overflow-hidden border-2 border-white">
          <img src="/fakeuser.jpg" alt="" className="h-full w-auto" />
        </div>
      </div>
      <span className="text-sm group-hover:text-primary-600 group-hover:font-bold">
        Ahmad Albab
      </span>
    </div>
  );
}
