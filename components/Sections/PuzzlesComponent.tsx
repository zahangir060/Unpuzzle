import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Ratings from "../Ratings";

function PuzzlesComponent() {
  return (
    <div className="max-w-[290px]">
      <Image src="/Rectangle28.png" width={290} height={180} alt="img" />
      <p className="text-xs font-normal text-black-80">
        How I Find Influencers That Make Me $14K A Week...
      </p>
      <p className="text-[14px] font-normal text-black-60">
        Youtube Puzzle Journey
      </p>
      <p className="text-[14px] font-normal text-black-80">
        <b>Unpuzzled by:</b> @mahtabalam
      </p>
      <div className="flex justify-between">
        <span className="text-black-80">
          <Image src="/puzzle_icon.png" width={16} height={16} alt="icon" /> 30
        </span>
        <span className="flex items-center text-[14px]">
          <span className="text-yellow font-bold">4.6</span>
          <Ratings width={16} height={16}></Ratings>
          <span className="text-black-50"> (135)</span>
        </span>
      </div>
      <div className="flex items-stretch gap-4">
        <Splide
          options={{
            rewind: true,
            gap: "10px",
            perPage: 4,
            width: 290,
            arrows: true,
            type: "loop",
          }}
        >
          <SplideSlide>
            <div className="grid justify-items-center items-center min-h-[73px] justify-center bg-puzzlebg p-2 ">
              <Image src="/pdf.svg" width={24} height={30} alt="icon" />
              <span>10</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid justify-items-center items-center min-h-[73px] justify-center bg-puzzlebg p-2 ">
              <Image src="/microphone.svg" width={22} height={30} alt="icon" />
              <span>10</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid justify-items-center items-center min-h-[73px] justify-center bg-puzzlebg p-2 ">
              <Image src="/notes.svg" width={30} height={30} alt="icon" />
              <span>10</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid justify-items-center items-center min-h-[73px] justify-center bg-puzzlebg p-2 ">
              <Image src="/docs.svg" width={22.5} height={30} alt="icon" />
              <span>10</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid justify-items-center items-center min-h-[73px] justify-center bg-puzzlebg p-2 ">
              <Image src="/v-camera.svg" width={30} height={23} alt="icon" />
              <span>10</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="grid justify-items-center items-center min-h-[73px] justify-center bg-puzzlebg p-2 ">
              <Image src="/media.svg" width={30} height={23} alt="icon" />
              <span>10</span>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default PuzzlesComponent;
