import Image from "next/image";
function JourneyTop() {
  return (
    <div className="w-full flex items-center justify-between mb-36">
      <div className="w-1/2 relative">
        <div
          className="w-1/3 absolute"
          style={{ zIndex: -1, left: "-100px", top: "-70px" }}
        >
          <Image
            src="/bgVector.svg"
            width={260}
            height={228}
            alt="backgroundImage"
          />
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
          src="/adding_pp.png"
          width={550}
          height={341}
          alt="Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default JourneyTop;
