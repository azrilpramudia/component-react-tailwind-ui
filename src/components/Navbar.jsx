const Navbar = () => {
  return (
    <>
      <div className="bg-sky-400 min-h-screen">
        <h1 className="text-5xl font-bold text-white p-5 flex justify-center">
          Ini Navbar
        </h1>
        <div className="flex justify-center items-center">
          <button className="bg-red-700 rounded-md font-bold text-white px-4 py-3">
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
