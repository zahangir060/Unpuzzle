import Image from "next/image";
import Link from "next/link";

function TrainerCard() {
  return (
    <div className="w-full border-2 border-black-10 rounded-md pb-4 mb-36">
      <div className="card-header flex justify-between mb-6">
        <p className="font-bold text-blue ml-4 pt-4 text-md">Mahtab Alam</p>
        <p
          className="font-bold bg-lightgrey px-16 py-2 text-md"
          style={{ borderRadius: "0 0 0 40px" }}
        >
          Know the <span className="text-yellow">Unpuzzler</span>
        </p>
      </div>
      <div className="flex-row ml-4">
        <div className="flex text-[14px] justify-start items-center text-black-80 gap-x-10 mb-6">
          <div>
            <Image src="/trainer.png" width={150} height={150} alt="trainer" />
          </div>

          <div className="flex-row items-center">
            <div className="pb-2 flex items-center">
              <Image
                src="/students.svg"
                width={25}
                height={15}
                alt="students"
              />
              <span className="ml-2">14666 students</span>
            </div>
            <div className="pb-2 flex items-center">
              <Image
                src="/location.svg"
                width={15}
                height={20}
                alt="location"
              />
              <span className="ml-2"> 1Toronto, Canada</span>
            </div>
            <div className="pb-2 flex items-center">
              <Image src="/star-sm.png" width={15} height={15} alt="star" />
              <span className="ml-2">
                {" "}
                <b>4.7</b> Instructor rating
              </span>
            </div>
          </div>
        </div>
        <div className="flex-row">
          <p className="w-2/3 text-xs font-bold text-black-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            potenti dignissim elementum in consectetur quisque enim. Ac leo hac
            egestas dignissim elementum, sed.
          </p>
          <ul className="list-disc text-xs text-transparent bg-clip-text bg-gradient-to-b from-black-80 to-transparent mb-2">
            <li>Lorem ipsum dolor dolor sit amet elit.</li>
            <li>Lorem ipsum dolor sit amecct elit.</li>
            <li className="">Lorem ipsum dolor sit amet es lit.</li>
          </ul>
          <Link href="/">
            <a className="text-blue text-xs">
              Read More{" "}
              <span>
                <Image
                  width={19}
                  height={11}
                  src="/arrow-bottom.png"
                  alt="arrow"
                />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
