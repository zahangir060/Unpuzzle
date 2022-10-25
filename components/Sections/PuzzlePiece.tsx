import Image from "next/image";

function PuzzlePiece() {
  return (
    <div className="w-full flex items-center bg-puzzlebg border border-black-10 rounded-md px-2 py-4 mb-4">
      <span className="w-3/12 pr-4 pl-2 font-sm font-normal text-black-80">
        Mahtab Alam
      </span>
      <div className="w-3/12 grid grid-cols-5 gap-2 pr-4 pl-2  text-black-60 font-normal text-xs">
        <div className=" w-full items-centerborder-[0.5px] border-black-30 px-1 rounded-lg">
          <Image src="/pdf.svg" width={13} height={16} alt="icon" /> 10
        </div>
        <div className="flex w-full items-center border-[0.5px] border-black-30 px-1 rounded-lg">
          <Image src="/microphone.svg" width={12} height={16} alt="icon" /> 10
        </div>
        <div className="flex w-full items-center border-[0.5px] border-black-30 px-1 rounded-lg">
          <Image src="/notes.svg" width={16} height={16} alt="icon" /> 10
        </div>
        <div className="flex w-full items-center border-[0.5px] border-black-30 px-1 rounded-lg">
          <Image src="/docs.svg" width={12} height={16} alt="icon" /> 10
        </div>
        <div className="flex w-full items-center border-[0.5px] border-black-30 px-1 rounded-lg">
          <Image src="/v-camera.svg" width={20} height={14} alt="icon" /> 10
        </div>
        <div className="flex w-ful items-center border-[0.5px] border-black-30 px-1 rounded-lg">
          <Image src="/media.svg" width={17.5} height={14} alt="icon" /> 10
        </div>
      </div>
      <span className="w-2/12 pr-4 pl-2 font-bold text-black-80">$45</span>
      <span className="w-2/12 pr-4 pl-2">
        <span className="text-[14px] font-normal text-black-50">
          <Image src="/star-sm.png" width={16} height={16} alt="icon" />
          <Image src="/star-sm.png" width={16} height={16} alt="icon" />
          <Image src="/star-sm.png" width={16} height={16} alt="icon" />
          <Image src="/star-sm.png" width={16} height={16} alt="icon" />
          <Image src="/star-half.svg" width={16} height={16} alt="icon" /> (135)
        </span>
      </span>
      <span className="w-2/12 pr-4 pl-2">
        <button className="w-full bg-blue py-4 rounded-md text-white text-xs">
          Add to Cart
        </button>
      </span>
    </div>
  );
}

export default PuzzlePiece;
