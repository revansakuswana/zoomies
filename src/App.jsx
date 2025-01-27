import '@/App.css';

export const App = () => (
  <div className="flex flex-col items-center justify-center px-10 md:px-40">
    {/* header */}
    <header className="text-white py-8 justify-center">
      <div className="container mx-auto flex justify-center items-center">
        {/* Navigasi */}
        <nav className="space-x-8">
          <a
            href="https://x.com/OGverse_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 cursor-pointer hover:text-white transition-all active:brightness-90 sm:text-xl"
          >
            X
          </a>
          <a
            href="https://t.me/ogversee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 cursor-pointer hover:text-white transition-all active:brightness-90 sm:text-xl"
          >
            Telegram
          </a>
          <a
            href="https://docs.ogverse.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 cursor-pointer hover:text-white transition-all active:brightness-90 sm:text-xl"
          >
            Docs
          </a>
        </nav>
      </div>
    </header>

    {/* Section 1 */}
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="py-10">
        <div className="justify-items-center mb-10">
          <img
            className="w-2/4 md:w-48"
            src="./ogverse.png"
            alt="ogverse Logo"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Boost Your Radix Experience, Earn $OG
        </h1>
      </div>
      <button className="launch-app">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Launch App</span>
      </button>
    </div>

    {/* Section 2 */}
    <div className="w-full py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-medium text-center">
        Earn With Your On-Chain Activity on Radix
      </h1>
      <div className="justify-items-center mt-5">
        <img
          className="w-1/5 md:w-2/5"
          src="./money-saving.png"
          alt="Earn logo"
        />
      </div>
    </div>

    {/* Section 3 */}
    <div className="w-full py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-medium text-center">
        How It&apos;s Work
      </h1>
      <div className="flex items-center justify-center mt-5">
        <img className="w-10 mr-2" src="./money-saving.png" alt="Earn logo" />
        <h1 className="text-xl  font-normal text-center">Earn Points For</h1>
      </div>
      <div className="w-full mt-10 gap-10 flex flex-wrap items-center justify-center">
        <img
          className="w-20 md:w-32 grayscale hover:grayscale-0 hover:-translate-y-2 transition duration-700"
          src="./switch.png"
          alt="swap logo"
        />
        <img
          className="w-20 md:w-32 grayscale hover:grayscale-0 hover:-translate-y-2 transition duration-700"
          src="./security.png"
          alt="staking logo"
        />
        <img
          className="w-20 md:w-32 grayscale hover:grayscale-0 hover:-translate-y-2 transition duration-700"
          src="./shopping-cart.png"
          alt="buying logo"
        />
        <img
          className="w-20 md:w-32 grayscale hover:grayscale-0 hover:-translate-y-2 transition duration-700"
          src="./money.png"
          alt="send logo"
        />
        <img
          className="w-20 md:w-32 grayscale hover:grayscale-0 hover:-translate-y-2 transition duration-700"
          src="./needy.png"
          alt="wallet logo"
        />
      </div>

      <div className="flex flex-col mt-24">
        <div className="flex flex-wrap gap-16 justify-center items-center">
          <div className="relative flex w-80 h-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
              <div className="justify-items-center content-center absolute inset-0 bg-radial-purple-black">
                <img className="w-32" src="./convert.png" alt="earn logo" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
                Convert Points to $OG Tokens
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                Your points can be converted into $OG tokens, the core currency
                of OGverse when phase 1 ends.
              </p>
            </div>
          </div>

          <div className="relative flex w-80 h-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
              <div className="justify-items-center content-center absolute inset-0 bg-radial-purple-black">
                <img className="w-32" src="./joystick.png" alt="games logo" />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
                Betting Games
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                Use your points to play and multiply your rewards!
              </p>
            </div>
          </div>

          <div className="relative flex w-80 h-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
              <div className="justify-items-center content-center absolute inset-0 bg-radial-purple-black">
                <img
                  className="w-32"
                  src="./podium.png"
                  alt="leaderboard logo"
                />
              </div>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
                Leaderboard & Social Tasks
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                Compete with others and earn extra points by completing tasks
                like following social media or referring friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 4 */}
    <div className="w-full py-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-medium mb-5">About</h1>
      <h4 className="text-xl md:text-xl font-light text-justify">
        OGverse is a rewards platform built for the Radix community. It rewards
        users for their on-chain activities and introduces gamification to make
        interactions more engaging and rewarding. <br /> <br />
        In OGverse, users earn points for actions like swapping tokens, buying
        NFTs, sending funds, or staking. These points can be converted into $OG
        tokens or used in betting games to multiply rewards. Our mission is to
        strengthen the Radix ecosystem by encouraging user activity, fostering
        collaboration, and creating a fun, rewarding experience for the
        community
      </h4>
    </div>

    {/* footer */}
    <footer className="text-white py-10 flex flex-col sm:flex-row justify-between text-center max-w-[850px] w-full gap-10">
      <div className="text-center">
        <h3 className="text-3xl">LAWS</h3>
        <ul className="text-gray-400 space-y-2 mt-4">
          <li>
            <a
              href="/"
              className="hover:text-white transition-all active:brightness-90"
            >
              Privacy policy
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h3 className="text-3xl">SOCIALS</h3>
        <ul className="text-gray-400 space-y-2 mt-4">
          <li>
            <a
              href="https://x.com/OGverse_"
              className="hover:text-white transition-all active:brightness-90"
            >
              X
            </a>
          </li>

          <li>
            <a
              href="https://t.me/ogversee"
              className="hover:text-white transition-all active:brightness-90"
            >
              Telegram
            </a>
          </li>

          <li>
            <a
              href="https://docs.ogverse.fun"
              className="hover:text-white transition-all active:brightness-90"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h3 className="text-3xl">CONTACTS</h3>
        <ul className="text-gray-400 space-y-2 mt-4">
          <li>
            <a
              href="mailto:help@ogverse.fun"
              className="hover:text-white transition-all active:brightness-90"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);
