import Image from "next/image";

function Ratings(props: any) {
  return (
    <>
      <Image
        src="/star-sm.png"
        width={props.width}
        height={props.height}
        alt="icon"
      />
      <Image
        src="/star-sm.png"
        width={props.width}
        height={props.height}
        alt="icon"
      />
      <Image
        src="/star-sm.png"
        width={props.width}
        height={props.height}
        alt="icon"
      />
      <Image
        src="/star-sm.png"
        width={props.width}
        height={props.height}
        alt="icon"
      />
      <Image
        src="/star-sm.png"
        width={props.width}
        height={props.height}
        alt="icon"
      />
    </>
  );
}

export default Ratings;
