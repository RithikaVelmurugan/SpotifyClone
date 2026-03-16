import Navbar from "./Navbar";
import { podcastsData } from "../assets/assets";
import PodcastItem from "./PodcastItem";

const DisplayPodcasts = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">All Podcasts</h1>
        <div className="flex overflow-auto flex-wrap gap-4">
          {podcastsData.map((item, index) => (
            <PodcastItem
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

export default DisplayPodcasts;
