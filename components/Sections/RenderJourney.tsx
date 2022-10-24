import Image from "next/image";
import camera from "../../public/icons/camera.png";
import puzzle from "../../public/icons/puzzle_icon.png";

function RenderJourney() {
  return (
    <div className="flex justify-start items-start gap-4 mb-4 hover:bg-black-10 p-3 rounded-md">
      <div className="mt-1">
        <Image src={puzzle} alt="puzzle" />
      </div>
      <div>
        <p className="text-xs">
          Check this alternate way to solve it in this pdf.
        </p>
        <div className="text-[14px] text-black-60 flex">
          <span className="mr-4">
            at: <b>2:30 </b>
          </span>
          <span>
            <Image src={camera} alt="camera" /> Video Puzzle Piece
          </span>
        </div>
      </div>
    </div>
  );
}

export default RenderJourney;
