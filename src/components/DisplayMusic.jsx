import Navbar from "./Navbar";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayMusic = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">All Music</h1>
        <div className="flex overflow-auto flex-wrap gap-4">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayMusic;
