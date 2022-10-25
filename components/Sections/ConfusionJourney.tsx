import Image from "next/image";
function ConfusionJourney() {
  return (
    <div className="w-full bg-orange-30 flex items-center text-center mb-36 pt-4">
      <div className="w-1/2 flex justify-center">
        <Image src="/confusion.svg" width={273} height={480} alt="confusion" />
      </div>
      <div className="w-1/2 max-w-[500px]">
        <p className="text-[40px] font-bold mb-4">Stuck in your study?</p>
        <p className="text-md font-bold mb-4">
          Get Help Now - Post a <span className="text-blue">Confusion</span>
        </p>
        <p className="text-md mb-4">
          Unpuzzle allows you to post confusions on any of its courses, which
          will be addressed by the Course Instructors directly
        </p>
        <button className="font-bold text-[20px] bg-blue text-white py-4 px-16 rounded-md">
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default ConfusionJourney;
