import Image from "next/image";
import Ratings from "../Ratings";
function StickyBanner() {
  return (
    <>
      <div className="row">
        <Image
          src="/DescriptionCourse.png"
          width={300}
          height={168}
          alt="Image"
        />
      </div>
      <div className="description">
        <p className="font-semibold text-black-100 font-md">
          Figma in 40 Minutes
        </p>
        <span className="font-xs text-black-60">Puzzle Journey</span>
        <p className="flex items-center gap-x-5">
          <span className="font-poppins font-bold text-green text-[30px]">
            $49.99
          </span>
          <span className="font-poppins font-regular text-black-60 text-[24px] line-through">
            $89.99
          </span>
        </p>
        <div className="flex items-center gap-x-2 font-poppins pb-2">
          <span className="text-[14px] font-bold text-yellow">4.6</span>
          <span>
            <Ratings width={16} height={16}></Ratings>
          </span>
          <span className="text-[14px] text-black-50">(135)</span>
        </div>
        <p className="text-black-80 text-[16px]">
          YT Channel: <span className="font-bold">Traversy Media</span>
        </p>
        <p className="text-black-80 text-[16px]">
          Unpuzzled by: <span className="font-bold">Mahtab Alam</span>
        </p>
        <p className="text-black-70 text-[16px]">
          <b>Puzzle Content: </b>
          <b>15</b> Video Puzzle Pieces, <b>10</b> Youtube Puzzle Pieces,{" "}
          <b>8</b> Guide Puzzle Pieces & <b>7</b> Quiz Puzzle PIeces
        </p>
        <div className="text-black-70 text-[16px] flex items-center gap-x-2">
          + <b>5</b> Free Confusions
          <div className="flex justify-center items-center w-5 h-5 border border-black-70 rounded-2xl">
            <Image src="/info.png" width={2} height={12} alt="icon" />
          </div>
        </div>
        <div className="text-black-70 text-[16px] flex items-center gap-x-2 mb-4">
          + <b>3</b> Extra Zoom Session
          <div className="flex justify-center items-center w-5 h-5 border border-black-70 rounded-2xl">
            <Image src="/info.png" width={2} height={12} alt="icon" />
          </div>
        </div>
        <div className="grid gap-y-4">
          <button className="border border-blue px-8 py-2 rounded text-blue font-bold">
            Add To Cart
          </button>
          <button className="bg-blue px-8 py-2 rounded text-white font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default StickyBanner;
