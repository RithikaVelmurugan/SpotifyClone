import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab
  const isHome = location.pathname === "/";
  const isMusic = location.pathname === "/music";
  const isPodcasts = location.pathname === "/podcasts";
  const isSearch = location.pathname === "/search";

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
            onClick={() => navigate(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p
            onClick={() => navigate("/premium")}
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-gray-200"
          >
            Explore Premium
          </p>
          <p
            onClick={() => navigate("/install")}
            className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer border border-white hover:border-gray-300"
          >
            Install App
          </p>
          <p
            onClick={() => navigate("/profile")}
            className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600"
          >
            B
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p
          onClick={() => navigate("/")}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            isHome ? "bg-white text-black" : "bg-[#242424] text-white"
          }`}
        >
          All
        </p>
        <p
          onClick={() => navigate("/music")}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            isMusic ? "bg-white text-black" : "bg-[#242424] text-white"
          }`}
        >
          Music
        </p>
        <p
          onClick={() => navigate("/search")}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            isSearch ? "bg-white text-black" : "bg-[#242424] text-white"
          }`}
        >
          Search
        </p>
        <p
          onClick={() => navigate("/podcasts")}
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            isPodcasts ? "bg-white text-black" : "bg-[#242424] text-white"
          }`}
        >
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
