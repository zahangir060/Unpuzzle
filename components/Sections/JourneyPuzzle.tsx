import Image from "next/image";
function JourneyPuzzle() {
  return (
    <div className="w-full h-[620px] mb-40 grid gap-2">
      <div className="flex w-full">
        <div className="w-1/4 relative">
          <div className="absolute" style={{ zIndex: -1 }}>
            <Image src="/puzzle-piece-1.png" width={308} height={309} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-79px", zIndex: -1 }}>
            <Image src="/puzzle-piece-2.png" width={380} height={308} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-88px", zIndex: -1 }}>
            <Image src="/puzzle-piece-3.png" width={380} height={308} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-98px", zIndex: -1 }} >
            <Image src="/puzzle-piece-4.png" width={380} height={382} alt="puzzle" />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/4 relative">
          <div className="absolute" style={{ top: "-76px", zIndex: -1 }}>
            <Image src="/puzzle-piece-5.png" width={308} height={381} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-79px", top: "-76px", zIndex: -1 }}>
            <Image src="/puzzle-piece-6.png" width={380} height={380} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-88px", top: "-76px", zIndex: -1 }}>
            <Image src="/puzzle-piece-7.png" width={380} height={380} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-98px", top: "0", zIndex: -1 }}>
            <Image src="/puzzle-piece-8.png" width={380} height={309} alt="puzzle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyPuzzle;
