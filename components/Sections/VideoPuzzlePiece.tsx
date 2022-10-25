import Image from "next/image";
import PuzzlePiece from "./PuzzlePiece";

function VideoPuzzlePiece() {
  return (
    <div className="mb-36">
      <div className="flex justify-center items-center text-left font-patuaOne text-[40px] gap-x-2 text-black-80">
        <span>Other people’s learning journey of this </span>
        <Image
          className="px-4"
          src="/youtube-md.svg"
          width={96}
          height={40}
          alt="youtube"
        />
        <span> Video Puzzle Piece</span>
      </div>
      <div className="w-full flex justify-start p-4 font-bold text-xs text-black-80 bg-puzzlebg border border-black-10 rounded-md mb-8">
        <span className="w-3/12 border-solid border-0 border-r-2 border-black-30 pr-4 pl-2">
          Unpuzzler Name
        </span>
        <span className="w-3/12 border-solid border-0 border-r-2 border-black-30 pr-4 pl-2">
          Puzzle Contents
        </span>
        <span className="w-2/12 border-solid border-0 border-r-2 border-black-30 pr-4 pl-2">
          Price
        </span>
        <span className="w-2/12 border-solid border-0 border-r-2 border-black-30 pr-4 pl-2">
          Rating
        </span>
        <span className="w-2/12 border-0 border-r-transparent pr-4 pl-2">
          Action
        </span>
      </div>
      <PuzzlePiece></PuzzlePiece>
      <PuzzlePiece></PuzzlePiece>
      <PuzzlePiece></PuzzlePiece>
      <PuzzlePiece></PuzzlePiece>
      <PuzzlePiece></PuzzlePiece>
      <button className="w-full border-[1px] border-blue py-8 rounded-md font-bold text-xs">
        <span>
          <Image src="/bellow.svg" width={16} height={18} alt="icon" />
        </span>
        <span className="px-24">Load More</span>
        <span>
          <Image src="/bellow.svg" width={16} height={18} alt="icon" />
        </span>
      </button>
    </div>
  );
}

export default VideoPuzzlePiece;
