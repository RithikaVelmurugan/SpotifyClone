import Navbar from "./Navbar";

const InstallApp = () => {
  return (
    <>
      <Navbar />
      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Install the Spotify App</h1>
          <p className="text-xl text-[#a7a7a7] mb-8">
            Download Spotify to listen on all your devices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#242424] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">On Your Phone</h3>
              <p className="text-[#a7a7a7] mb-6">
                Download the Spotify app on iOS or Android to listen on the go.
              </p>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold border border-white hover:bg-gray-900">
                  Get it on Google Play
                </button>
                <button className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold border border-white hover:bg-gray-900">
                  Download on the App Store
                </button>
              </div>
            </div>

            <div className="bg-[#242424] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">On Your Computer</h3>
              <p className="text-[#a7a7a7] mb-6">
                Use Spotify on Windows, Mac, or Linux for the full experience.
              </p>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold border border-white hover:bg-gray-900">
                  Windows
                </button>
                <button className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold border border-white hover:bg-gray-900">
                  Mac
                </button>
                <button className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold border border-white hover:bg-gray-900">
                  Linux
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#242424] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Install Spotify?</h3>
            <ul className="space-y-3 text-[#a7a7a7]">
              <li>✓ Offline listening - Download your favorite songs</li>
              <li>✓ Crossfade between songs for seamless listening</li>
              <li>✓ Create and manage playlists easily</li>
              <li>✓ Better audio quality options</li>
              <li>✓ Faster performance and reliability</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallApp;
