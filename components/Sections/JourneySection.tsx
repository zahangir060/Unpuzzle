import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/icons/arrow-bottom.png";
import info from "../../public/icons/info.png";
import star from "../../public/icons/star-sm.png";
import j_image from "../../public/images/adding_pp.png";
import bgVector from "../../public/images/bgVector.svg";
import D_image from "../../public/images/DescriptionCourse.png";
import video_bg from "../../public/images/video_bg.png";
import RenderJourney from "./RenderJourney";
function JourneySection() {
  return (
    <div className="container font-poppins flex items-top gap-4 my-24 relative">
      <div className="w-4/5 flex-column">
        <div className="w-full flex items-center justify-between mb-36">
          <div className="w-1/2 relative">
            <div
              className="w-1/3 absolute"
              style={{ zIndex: -1, left: "-100px", top: "-70px" }}
            >
              <Image src={bgVector} alt="backgroundImage" className="" />
            </div>
            <div className="z-40">
              <p className="font-semibold text-black-100 text-md">
                Takeaways from this journey
              </p>
              <ul className="list-disc ml-4 text-black-70 text-sm">
                <li>Learn to use Auto Layout</li>
                <li>When to Group layers vs. using Auto Layout</li>
                <li>Create reusable UI with components</li>
                <li>Build 3 Landing Pages</li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={j_image}
              alt="Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="w-full flex mb-24">
          <div className="w-2/3 flex-column pr-12">
            <div className="w-full">
              <Image
                src={video_bg}
                alt="Image"
                className="max-w-none object-cover"
              />
            </div>

            <h2 className="font-patuaOne text-lg mt-2 mb-6 text-black-80">
              Description
            </h2>
            <p className="font-regular text-xs text-black-80 text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
              aliquet elit lectus tristique dolor orci lacus. Odio tortor quam
              hac quis dictum eu, amet. Et enim nunc orci vestibulum sed at
              bibendum. Aliquet et semper cras proin egestas proin mauris.
              Auctor augue porttitor sem nec faucibus turpis. Ante tincidunt
              odio blandit magna pulvinar congue justo. Varius vitae tempor, id
              nam sed. Fermentum amet, sed hac nunc. Risus, eu eu sagittis
              varius pretium et porta et morbi. Pharetra neque elit varius sed
              egestas aliquet est, augue. Mi placerat ullamcorper sit congue
              tempus purus eget ullamcorper eget. Vulputate non massa fermentum
              mattis bibendum duis.
            </p>
            <Link href="/">
              <a className="text-blue text-md">
                Read More{" "}
                <span>
                  <Image src={arrow} alt="arrow" />
                </span>
              </a>
            </Link>
          </div>
          <div className="w-1/3 mr-4">
            <p className="text-black-100 font-bold text-center">
              Puzzle Pieces in this Journey
            </p>
            <div className="flex-column">
              <RenderJourney />
              <RenderJourney />
              <RenderJourney />
              <RenderJourney />
              <RenderJourney />
              <RenderJourney />
              <RenderJourney />
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>

      <div className="w-1/5 max-h-[695px] drop-shadow-md p-4 border-solid border-black-10 bg-black-cardBG sticky top-0">
        <div className="row">
          <Image src={D_image} alt="Image" />
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
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
              <Image src={star} alt="icon" />
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
              <Image src={info} alt="icon" />
            </div>
          </div>
          <div className="text-black-70 text-[16px] flex items-center gap-x-2 mb-4">
            + <b>3</b> Extra Zoom Session
            <div className="flex justify-center items-center w-5 h-5 border border-black-70 rounded-2xl">
              <Image src={info} alt="icon" />
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
      </div>
    </div>
  );
}

export default JourneySection;
