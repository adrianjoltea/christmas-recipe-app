import { useEffect, useState } from "react";
import Lights from "./Lights";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainBody({
  input,
  setInput,
  info,
  setInfo,
  setMainInfo,
}) {
  //   console.log(info.data.recipes);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex + 5;
    if (newIndex < info?.data?.recipes.length) {
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 5;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(
    function () {
      async function fetchRecipe() {
        try {
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}&key=ea5fc79a-c9be-4f91-b97d-0770b7c44133`
          );

          const data = await res.json();
          console.log(data);
          setInfo(data);
        } catch (err) {
          console.error(err);
        }
      }
      fetchRecipe();
    },
    [input, setInfo]
  );

  useEffect(
    function () {
      async function fetchEntireRecipe() {
        try {
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/:${info.id}`
          );
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      }
      fetchEntireRecipe();
    },
    [info.id]
  );

  return (
    <section className="main__body" data-aos="fade-up">
      <div className="main__body-container">
        <div className="main__body-container-lights">
          <Lights num={23} />
        </div>
        <div className="main__body-container-title">
          <h2 className="main__body-container-title-text">
            Search for recipes
          </h2>
        </div>
        <div className="main__body-container-search margin-top-medium">
          <input
            type="text"
            placeholder="Enter your recipe"
            className="main__body-container-search-input"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>

        <div className="main__body-container-mainList">
          <button
            onClick={prevSlide}
            className="main__body-container-mainList-button"
          >
            <FaArrowLeft />
          </button>
          {info?.data?.recipes
            .slice(currentIndex, currentIndex + 5)
            .map((item, i) => (
              <RecipeKids key={i} item={item} setMainInfo={setMainInfo} />
            ))}
          <button
            onClick={nextSlide}
            className="main__body-container-mainList-button"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function RecipeKids({ item, fetchEntireRecipe, setMainInfo }) {
  const [visible, setVisible] = useState(false);

  const handleRecipeClick = async () => {
    try {
      setMainInfo("");
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${item.id}`
      );
      const data = await res.json();
      console.log(data);
      setMainInfo(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (
    item.image_url ===
    "http://forkify-api.herokuapp.com/images/72622_MEDIUMf850.jpg"
  )
    return null;

  return (
    <li
      className="main__body-container-mainList-child"
      onClick={handleRecipeClick}
    >
      <img
        style={{ display: visible ? "block" : "none" }}
        src={item.image_url}
        alt={item.id}
        className="main__body-container-mainList-child-img"
        onLoad={() => {
          setVisible(true);
        }}
      />
    </li>
  );
}
