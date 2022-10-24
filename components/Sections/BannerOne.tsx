import Image from "next/image";
import star from "../../public/icons/star.png";
import youtube from "../../public/icons/youtube.png";
import max from "../../public/images/maxresdefault1.png";

function BannerOne() {
  return (
    <div className="container mt-24 mb-36 flex items-center">
      <div className="left w-3/5">
        <h1 className="font-patuaOne text-lg mb-7 text-black-100">
          Figma in 40 Minutes
        </h1>
        <div className="font-poppins">
          <p className="flex items-center gap-2 font-poppins font-regular">
            <Image src={youtube} alt="icon" />
            Puzzle Journey
          </p>
          <p className="font-poppins font-regular text-grey">
            Last Activity on july 07, 2021
          </p>
          <p className="font-poppins font-regular text-black-80 w-2/3">
            Entertaining video showing you how to create a simple and clean
            design in Figma
          </p>
          <p className="flex items-center gap-x-5">
            <span className="font-poppins font-bold text-green text-[34px]">
              $49.99
            </span>
            <span className="font-poppins font-regular text-black-60 text-[24px] line-through">
              $89.99
            </span>
          </p>
          <div className="flex items-center gap-x-2 font-poppins">
            <span className="text-[16px] font-bold text-yellow">4.6</span>
            <span>
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
            </span>
            <span className="text-[14px] text-black-50">(135)</span>
          </div>
          <p className="text-black-80">
            Unpuzzled by: <span className="font-bold">Mahtab Alam</span>
          </p>
          <button className="bg-blue px-8 py-2 rounded text-white font-bold">
            Buy Now
          </button>
        </div>
      </div>
      <div className="right w-2/5">
        <Image src={max} alt="image" />
      </div>
    </div>
  );
}

export default BannerOne;
