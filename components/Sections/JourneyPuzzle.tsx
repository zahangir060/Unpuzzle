import Image from "next/image";
import puzzle2 from "../../public/images/puzzles/Vector-1.svg";
import puzzle3 from "../../public/images/puzzles/Vector-3.svg";
import puzzle4 from "../../public/images/puzzles/Vector-5.svg";
import puzzle1 from "../../public/images/puzzles/Vector.svg";
function JourneyPuzzle() {
  return (
    <div className="w-full h-[600px] grid gap-2">
      <div className="flex h-92 w-full">
        <div className="w-1/4 relative">
          <div className="absolute" style={{ zIndex: -1 }}>
            <Image src={puzzle1} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-81px", zIndex: -1 }}>
            <Image src={puzzle2} alt="puzzle" />
          </div>
          <div className="desc">
            <h1>Test</h1>
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-91px", zIndex: -1 }}>
            <Image src={puzzle3} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div
            className="absolute"
            style={{ left: "-100px", top: "-2px", zIndex: -1 }}
          >
            <Image src={puzzle4} alt="puzzle" />
          </div>
        </div>
      </div>
      <div className="flex h-92 w-full">
        <div className="w-1/4 relative">
          <div className="absolute" style={{ zIndex: -1 }}>
            <Image src={puzzle1} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-81px", zIndex: -1 }}>
            <Image src={puzzle2} alt="puzzle" />
          </div>
          <div className="desc">
            <h1>Test</h1>
          </div>
        </div>
        <div className="w-1/4 relative">
          <div className="absolute" style={{ left: "-91px", zIndex: -1 }}>
            <Image src={puzzle3} alt="puzzle" />
          </div>
        </div>
        <div className="w-1/4 relative">
          <div
            className="absolute"
            style={{ left: "-100px", top: "-2px", zIndex: -1 }}
          >
            <Image src={puzzle4} alt="puzzle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JourneyPuzzle;
