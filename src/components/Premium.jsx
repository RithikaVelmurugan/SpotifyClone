import Navbar from "./Navbar";

const Premium = () => {
  return (
    <>
      <Navbar />
      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Get Premium</h1>
          <p className="text-xl text-[#a7a7a7] mb-8">
            Upgrade to premium and enjoy unlimited music without interruptions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#242424] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-[#a7a7a7] mb-4">Forever free with ads</p>
              <ul className="space-y-3 mb-6 text-sm">
                <li>✓ Ad-supported play</li>
                <li>✓ Standard audio quality</li>
                <li>✓ Mobile app</li>
              </ul>
              <button className="w-full px-6 py-2 bg-[#1DB954] text-black rounded-full font-semibold">
                Current Plan
              </button>
            </div>

            <div className="bg-[#282828] p-6 rounded-lg border-2 border-[#1DB954]">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-[#a7a7a7] mb-4">₹119/month</p>
              <ul className="space-y-3 mb-6 text-sm">
                <li>✓ Ad-free listening</li>
                <li>✓ High audio quality</li>
                <li>✓ Download to listen offline</li>
                <li>✓ Play any song anytime</li>
              </ul>
              <button className="w-full px-6 py-2 bg-[#1DB954] text-black rounded-full font-semibold hover:bg-[#1ed760]">
                Upgrade Now
              </button>
            </div>

            <div className="bg-[#242424] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Family</h3>
              <p className="text-[#a7a7a7] mb-4">₹189/month</p>
              <ul className="space-y-3 mb-6 text-sm">
                <li>✓ Up to 6 accounts</li>
                <li>✓ Block explicit music</li>
                <li>✓ Ad-free listening</li>
                <li>✓ Download & offline</li>
              </ul>
              <button className="w-full px-6 py-2 bg-[#1DB954] text-black rounded-full font-semibold hover:bg-[#1ed760]">
                Get Family Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
