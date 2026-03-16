import Navbar from "./Navbar";
import { useState } from "react";

const CreatePlaylist = () => {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: "My Favorite Hits",
      image: "https://via.placeholder.com/180?text=Playlist+1",
      songs: 15,
    },
    {
      id: 2,
      name: "Workout Mix",
      image: "https://via.placeholder.com/180?text=Playlist+2",
      songs: 24,
    },
    {
      id: 3,
      name: "Chill Vibes",
      image: "https://via.placeholder.com/180?text=Playlist+3",
      songs: 38,
    },
  ]);

  const [playlistName, setPlaylistName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCreatePlaylist = (e) => {
    e.preventDefault();

    if (playlistName.trim()) {
      const newPlaylist = {
        id: playlists.length + 1,
        name: playlistName,
        image: `https://via.placeholder.com/180?text=${encodeURIComponent(playlistName)}`,
        songs: 0,
      };

      setPlaylists([...playlists, newPlaylist]);
      setPlaylistName("");
      setShowForm(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-6">
        <h1 className="my-5 font-bold text-2xl">My Playlists</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 px-6 py-2 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600"
        >
          {showForm ? "Cancel" : "+ Create New Playlist"}
        </button>

        {showForm && (
          <form
            onSubmit={handleCreatePlaylist}
            className="mb-6 p-4 bg-[#242424] rounded-lg"
          >
            <input
              type="text"
              placeholder="Enter playlist name..."
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="w-full px-4 py-2 bg-[#1a1a1a] text-white rounded focus:outline-none focus:bg-[#282828] mb-3"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600"
              >
                Create
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-[#282828]"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="p-4 bg-[#242424] rounded-lg cursor-pointer hover:bg-[#282828] transition"
            >
              <img
                src={playlist.image}
                alt={playlist.name}
                className="w-full aspect-square rounded mb-3 object-cover"
              />
              <h3 className="font-semibold text-white mb-1">{playlist.name}</h3>
              <p className="text-sm text-[#a7a7a7]">{playlist.songs} songs</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreatePlaylist;
