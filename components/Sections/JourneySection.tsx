import ConfusionJourney from "./ConfusionJourney";
import JourneyTop from "./JourneyTop";
import JourneyVideo from "./JourneyVideo";
import PuzzlesByTrainer from "./PuzzlesByTrainer";
import StickyBanner from "./StickyBanner";
import TrainerCard from "./TrainerCard";
import VideoPuzzlePiece from "./VideoPuzzlePiece";
function JourneySection() {
  return (
    <div className="container max-w-full font-poppins flex items-top gap-4 my-24 relative">
      {/* journey section left column  */}

      <div className="w-4/5 flex-column">
        <JourneyTop></JourneyTop>
        <JourneyVideo></JourneyVideo>
        <TrainerCard></TrainerCard>
        <ConfusionJourney></ConfusionJourney>
        <VideoPuzzlePiece></VideoPuzzlePiece>
        <PuzzlesByTrainer></PuzzlesByTrainer>
      </div>

      {/* journey section right column  */}

      <div className="w-1/5 max-h-[695px] drop-shadow-md p-4 border-solid border-black-10 bg-black-cardBG sticky top-0 mb-4">
        <StickyBanner></StickyBanner>
      </div>
    </div>
  );
}

export default JourneySection;
