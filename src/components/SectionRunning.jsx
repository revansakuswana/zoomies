const SectionRunning = () => {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="flex w-full relative bg-black">
        <div className="flex animate-loop-scroll">
          {/* Duplikasi gambar untuk efek infinite scroll */}
          {Array(10)
            .fill()
            .map((_, i) => (
              <img
                key={i}
                src="https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/banner.jpg"
                alt="banner"
                className="w-[100%]"
              />
            ))}
        </div>
      </div>
      <div className="relative w-full bg-black aria-hidden=true">
        <div className="flex animate-loop-scroll">
          {/* Duplikasi gambar untuk efek infinite scroll */}
          {Array(10)
            .fill()
            .map((_, i) => (
              <img
                key={i}
                src="https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/banner.jpg"
                alt="banner"
                className="w-[100%]"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionRunning;
