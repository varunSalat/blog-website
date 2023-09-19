import preloader from "../assets/preloader.gif";
const Loader = () => {
  return (
    <>
      <div className="w-full fixed top-0 left-0 h-full z-10 bg-white grid place-items-center">
        <div className="flex flex-col">
          <img src={preloader} className="w-[70px] ml-2" alt="preloader" />
          <h1 className="text-2xl mt-3 text-gray-500">Loading...</h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
