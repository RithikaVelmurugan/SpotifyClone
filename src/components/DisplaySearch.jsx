import Navbar from "./Navbar";
import { useState } from "react";
import { songsData, albumsData, podcastsData } from "../assets/assets";
import SongItem from "./SongItem";
import AlbumItem from "./AlbumItem";
import PodcastItem from "./PodcastItem";

const DisplaySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songsData.filter(
    (song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.desc.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredAlbums = albumsData.filter(
    (album) =>
      album.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      album.desc.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredPodcasts = podcastsData.filter(
    (podcast) =>
      podcast.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.desc.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search songs, albums, podcasts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-[#282828] text-white rounded-full focus:outline-none focus:bg-[#333333]"
        />
      </div>

      {searchTerm && (
        <>
          {filteredSongs.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold text-2xl mb-4">Songs</h2>
              <div className="flex overflow-auto flex-wrap gap-4">
                {filteredSongs.map((item, index) => (
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
          )}

          {filteredAlbums.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold text-2xl mb-4">Albums</h2>
              <div className="flex overflow-auto flex-wrap gap-4">
                {filteredAlbums.map((item, index) => (
                  <AlbumItem
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    id={item.id}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          )}

          {filteredPodcasts.length > 0 && (
            <div className="mb-6">
              <h2 className="font-bold text-2xl mb-4">Podcasts</h2>
              <div className="flex overflow-auto flex-wrap gap-4">
                {filteredPodcasts.map((item, index) => (
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
          )}

          {filteredSongs.length === 0 &&
            filteredAlbums.length === 0 &&
            filteredPodcasts.length === 0 && (
              <p className="text-center text-[#a7a7a7] mt-8">
                No results found for "{searchTerm}"
              </p>
            )}
        </>
      )}

      {!searchTerm && (
        <p className="text-center text-[#a7a7a7] mt-8">
          Search for songs, albums, or podcasts
        </p>
      )}
    </>
  );
};

export default DisplaySearch;
