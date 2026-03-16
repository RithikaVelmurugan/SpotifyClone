import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import DisplayPodcast from "./DisplayPodcast";
import DisplayPodcasts from "./DisplayPodcasts";
import DisplayMusic from "./DisplayMusic";
import DisplaySearch from "./DisplaySearch";
import CreatePlaylist from "./CreatePlaylist";
import Premium from "./Premium";
import InstallApp from "./InstallApp";
import Profile from "./Profile";
import { useEffect, useRef } from "react";
import { albumsData, podcastsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const isPodcast = location.pathname.includes("podcast");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const podcastId =
    isPodcast && !location.pathname.includes("/podcasts")
      ? location.pathname.slice(-1)
      : "";
  const bgColor = isAlbum
    ? albumsData[Number(albumId)]?.bgColor
    : isPodcast && podcastId
      ? podcastsData[Number(podcastId)]?.bgColor
      : "#121212";

  useEffect(() => {
    if (isAlbum || (isPodcast && podcastId)) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  });
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/music" element={<DisplayMusic />} />
        <Route path="/search" element={<DisplaySearch />} />
        <Route path="/playlists" element={<CreatePlaylist />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/install" element={<InstallApp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/podcasts" element={<DisplayPodcasts />} />
        <Route path="/podcast/:id" element={<DisplayPodcast />} />
      </Routes>
    </div>
  );
};

export default Display;
