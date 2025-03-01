import '@/App.css';

export const App = () => (
  <div className="flex flex-col items-center justify-center">
    {/* header */}
    <div className="w-full py-6 px-14 bg-white justify-center border-b-8 border-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigasi */}
        <img
          src="https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/6784bc21b70916c654134c0c_Untitled_Artwork%202%201.webp"
          alt="Logo"
          width={48}
        />
        <nav className="space-x-8">
          <a
            href="https://x.com/OGverse_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black cursor-pointer sm:text-3xl hover-flip"
          >
            About
          </a>
          <a
            href="https://t.me/ogversee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black cursor-pointer sm:text-3xl hover-flip"
          >
            Tokenomics
          </a>
          <a
            href="https://ogverse-docs.gitbook.io/ogverse-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black cursor-pointer sm:text-3xl hover-flip"
          >
            Memes
          </a>
        </nav>
        <button className="relative bg-green-500 text-black border border-black rounded-full text-3xl font-semibold px-16 py-4 cursor-pointer shadow-[0_0_0_0_black] hover:-translate-y-3 hover:-translate-x-0.5 hover:shadow-[0px_25px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]">
          Play
        </button>
      </div>
    </div>

    {/* Section 1 */}
    <div className="flex items-center justify-center py-32 px-10">
      <div className="container mx-auto max-w-screen-lg grid md:grid-cols-2 gap-8">
        {/* Kiri - Text dan Buttons */}
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="relative text-center">
            <h1 className="w-full text-black text-2xl -top-[30%]">
              Bwahaha! You fools! You&apos;ve just activated my&nbsp;
              <span className="text-red-500 leading-none border-b-4 border-red-500">
                SNEC
              </span>
            </h1>
            <img
              src="https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/677f3e3ceece02326cbfa92b_Icon.webp"
              loading="lazy"
              alt=""
              className="w-full absolute -top-[60%] right-0 left-0"
            />
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col gap-4">
            <button className="w-full flex flex-row gap-2 justify-center bg-[#31D5CD] text-black border border-black rounded-full text-3xl px-10 py-4 cursor-pointer shadow-md hover:-translate-y-2">
              twitter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
              </svg>
            </button>

            <button className="w-full flex flex-row gap-2 justify-center bg-[#51B5FF] text-black border border-black rounded-full text-3xl px-10 py-4 cursor-pointer shadow-md hover:-translate-y-2">
              telegram
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Kanan - Gambar Ular */}
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/67808f0768804bf83ab8e4ff_Untitled_Artwork%204%201.webp"
            alt="SNEC Snake"
            className="max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="flex items-center justify-center min-h-screen px-4 md:px-10">
      <div className="flex flex-col max-w-4xl w-full">
        {/* Teks di Atas */}
        <h1 className="text-center text-black text-4xl md:text-5xl">
          Play Zoomies
        </h1>

        {/* Container untuk gambar dan tombol */}
        <div className="relative flex justify-between items-center mt-10">
          {/* Gambar Ular Kiri */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/67808f9896bac851af857c26_Group%2010%20(2)-p-500.webp"
              alt="Snake Left"
              className="w-24 md:w-32 lg:w-40 max-w-full"
            />
          </div>

          {/* Tombol Play di Tengah */}
          <button className="relative bg-green-500 text-black border border-black rounded-full text-lg md:text-3xl font-semibold px-6 md:px-10 py-2 md:py-3 cursor-pointer shadow-[0_0_0_0_black] hover:-translate-y-2 hover:-translate-x-0.5 hover:shadow-[0px_15px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]">
            Play
          </button>

          {/* Gambar Ular Kanan */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/67808f9868804bf83ab96611_Group%209%20(2).webp"
              alt="Snake Right"
              className="w-24 md:w-32 lg:w-40 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="flex items-center justify-center py-32 px-10"></div>

    {/* Section 4 */}
    <div className="w-full py-10 flex flex-col items-center justify-center"></div>

    {/* footer */}
    <footer className="py-16 flex flex-col sm:flex-row gap-10 justify-between items-center w-full border-y-4 border-black px-10">
      {/* Bagian Kiri: Logo dan Tombol */}
      <div className="flex flex-col items-center space-y-6">
        <img
          src="https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/6784bc21b70916c654134c0c_Untitled_Artwork%202%201.webp"
          alt="Logo"
          className="w-20 h-auto"
        />
        <button className="relative bg-green-500 text-black border border-black rounded-full text-3xl font-semibold px-16 py-4 cursor-pointer shadow-[0_0_0_0_black] hover:-translate-y-3 hover:-translate-x-0.5 hover:shadow-[0px_25px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]">
          Buy ZOOMIES!
        </button>
      </div>

      {/* Bagian Kanan: Navigasi */}
      <div className="text-center sm:text-right">
        <ul className="text-black text-4xl space-y-6">
          <li>
            <a
              href="/"
              className="underline transition-all active:brightness-90"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="underline transition-all active:brightness-90"
            >
              Tokenomics
            </a>
          </li>
          <li>
            <a
              href="/"
              className="underline transition-all active:brightness-90"
            >
              Memes
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <div>
      <p className="w-full text-center text-black text-3xl py-8">
        {'©'} &nbsp;
        {new Date().getFullYear()} by SNEC. All Rights Reserved
      </p>
    </div>
  </div>
);
