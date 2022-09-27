import { Splide, SplideSlide } from "@splidejs/react-splide";

import Card from "../card-suggested/card-suggested";

import "./suggested.css";
import "@splidejs/react-splide/css";

export default function Suggested() {
  const splideOptions = {
    perPage: 4,
    breakpoints: {
      1025: {
        perPage: 3,
      },
      640: {
        perPage: 2,
      },
    },
    perMove: 1,
    clones: 0,
  };

  const numberOfCard = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="suggested-container">
      <h3 className="suggested__title">Recipes you may like:</h3>

      <div>
        <Splide options={splideOptions} aria-label="My Favorite Images">
          {numberOfCard.map(() => {
            return (
              <SplideSlide>
                <Card />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
