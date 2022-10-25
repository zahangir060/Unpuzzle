import Image from "next/image";
import Link from "next/link";
import RenderJourney from "./RenderJourney";

function JourneyVideo() {
  return (
    <div className="w-full flex mb-24">
      <div className="w-2/3 flex-column pr-12">
        <div className="w-full">
          <Image
            src="/video_bg.png"
            width={800}
            height={450}
            alt="Image"
            className="max-w-none object-cover"
          />
        </div>

        <h2 className="font-patuaOne text-lg mt-2 mb-6 text-black-80">
          Description
        </h2>
        <p className="font-regular text-xs text-black-80 text-justify mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui aliquet
          elit lectus tristique dolor orci lacus. Odio tortor quam hac quis
          dictum eu, amet. Et enim nunc orci vestibulum sed at bibendum. Aliquet
          et semper cras proin egestas proin mauris. Auctor augue porttitor sem
          nec faucibus turpis. Ante tincidunt odio blandit magna pulvinar congue
          justo. Varius vitae tempor, id nam sed. Fermentum amet, sed hac nunc.
          Risus, eu eu sagittis varius pretium et porta et morbi. Pharetra neque
          elit varius sed egestas aliquet est, augue. Mi placerat ullamcorper
          sit congue tempus purus eget ullamcorper eget. Vulputate non massa
          fermentum mattis bibendum duis.
        </p>
        <Link href="/">
          <a className="text-blue text-md">
            Read More{" "}
            <span>
              <Image
                src="/arrow-bottom.png"
                width={22}
                height={13}
                alt="arrow"
              />
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
  );
}

export default JourneyVideo;
