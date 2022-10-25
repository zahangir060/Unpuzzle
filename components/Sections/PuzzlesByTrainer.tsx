import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PuzzlesComponent from "./PuzzlesComponent";

function PuzzlesByTrainer() {
  return (
    <div className="w-full">
      <p className="font-patuaOne text-[40px] text-black-80 pb-8">
        Other Puzzle Journeys by <span className="text-blue">Mahtab Alam</span>
      </p>
      <div className="grid gap-8">
        <Splide
          options={{
            rewind: true,
            gap: "10px",
            perPage: 4,
            width: 1265,
            arrows: true,
            type: "loop",
          }}
        >
          <SplideSlide>
            <PuzzlesComponent></PuzzlesComponent>
          </SplideSlide>
          <SplideSlide>
            <PuzzlesComponent></PuzzlesComponent>
          </SplideSlide>
          <SplideSlide>
            <PuzzlesComponent></PuzzlesComponent>
          </SplideSlide>
          <SplideSlide>
            <PuzzlesComponent></PuzzlesComponent>
          </SplideSlide>
          <SplideSlide>
            <PuzzlesComponent></PuzzlesComponent>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default PuzzlesByTrainer;
