import Navbar from "./Navbar";
import { useState } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setUserName(email.split("@")[0]);
      setEmail("");
      setPassword("");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (userName && email && password) {
      setIsLoggedIn(true);
      setUserName(userName);
      setEmail("");
      setPassword("");
      setShowSignup(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <>
      <Navbar />
      <div className="py-8">
        <div className="max-w-md mx-auto">
          {isLoggedIn ? (
            <div className="bg-[#242424] p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Welcome, {userName}!</h2>
              <p className="text-[#a7a7a7] mb-8">
                You're logged into your Spotify account.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">Account Details</h3>
                <div className="space-y-3 text-left">
                  <div>
                    <p className="text-[#a7a7a7] text-sm">Username</p>
                    <p className="font-semibold">{userName}</p>
                  </div>
                  <div>
                    <p className="text-[#a7a7a7] text-sm">Plan</p>
                    <p className="font-semibold">Free</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="bg-[#242424] p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {showSignup ? "Create Account" : "Login"}
              </h2>

              <form onSubmit={showSignup ? handleSignup : handleLogin}>
                {showSignup && (
                  <div className="mb-4">
                    <label className="block text-[#a7a7a7] text-sm mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Choose a username"
                      className="w-full px-4 py-2 bg-[#1a1a1a] text-white rounded focus:outline-none focus:bg-[#282828]"
                      required
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-[#a7a7a7] text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-[#1a1a1a] text-white rounded focus:outline-none focus:bg-[#282828]"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#a7a7a7] text-sm mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 bg-[#1a1a1a] text-white rounded focus:outline-none focus:bg-[#282828]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#1DB954] text-black rounded-full font-semibold hover:bg-[#1ed760]"
                >
                  {showSignup ? "Sign Up" : "Login"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowSignup(!showSignup)}
                  className="text-[#a7a7a7] hover:text-white"
                >
                  {showSignup
                    ? "Already have an account? Login"
                    : "Don't have an account? Sign up"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
