import Lights from "./Lights";
import { FaRegClock } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { Fraction } from "fractional";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RecipeDetails({ data }) {
  const [servings, setServings] = useState(0);
  console.log(servings);
  function handleAdd() {
    setServings(() => servings + 1);
  }
  function handleReduce() {
    if (servings > 1) setServings(() => servings - 1);
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    if (data?.data?.recipe.servings) {
      setServings(data?.data?.recipe.servings);
    }
  }, [data]);
  return (
    <div className="sec__body" data-aos="fade-up">
      <div className="sec__body-container">
        <div className="main__body-container-lights">
          <Lights num={35} />
        </div>
        <div className="sec__body-container-title">
          <h2 className="sec__body-container-title-h2">
            {data?.data?.recipe.title}
          </h2>
        </div>
        <div className="sec__body-container-split">
          <div className="sec__body-container-split-image">
            <img
              src={data?.data?.recipe.image_url}
              alt={data?.data?.recipe.title}
              className="sec__body-container-split-image-img"
            />
            <div className="sec__body-container-split-image-details">
              <div className="sec__body-container-split-image-details-time">
                <span>
                  <FaRegClock />
                </span>
                <span>{data?.data?.recipe.cooking_time} MIN</span>
              </div>
              <div className="sec__body-container-split-image-details-servings">
                <span>
                  <IoPersonSharp />
                </span>
                <span>{servings}</span>
                <div className="sec__body-container-split-image-details-servings-body">
                  <button
                    onClick={handleAdd}
                    className="sec__body-container-split-image-details-servings-btn"
                  >
                    +
                  </button>
                  <button
                    onClick={handleReduce}
                    className="sec__body-container-split-image-details-servings-btn"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="sec__body-container-split-details">
            <div className="sec__body-container-split-details-title">
              <h3>Ingredients</h3>
            </div>
            <div className="sec__body-container-split-details-ingredients">
              <ul className="sec__body-container-split-details-ingredients-ul">
                {data?.data?.recipe.ingredients.map(ing => (
                  <Ingredient
                    ing={ing}
                    servings={servings}
                    setServings={setServings}
                    data={data}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ingredient({ ing, servings, data }) {
  return (
    <li className="sec__body-container-split-details-ingredients-ing">
      {ing.quantity
        ? new Fraction(
            ing.quantity * (servings / data?.data?.recipe.servings)
          ).toString()
        : ""}{" "}
      {ing.unit} {ing.description}
    </li>
  );
}
