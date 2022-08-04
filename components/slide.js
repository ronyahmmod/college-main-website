import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const style = {
  wrapper:
    "relative max-w-screen w-full max-h-screen sm:max-h-[600px] bg-slate-200 h-[500px] mx-auto",
  slide: "w-full h-full",
  slideImage: "h-full w-full object-cover",
  actionButton:
    "cursor-pointer absolute top-[50%] bg-teal-400 p-2 rounded-full text-white opacity-70 hover:opacity-100 transition-all ease-in delay-200",
  actionButtonImage: "text-white",
};

export function SlideItem({ image, caption, slideNum, totlaSlide }) {
  return (
    <div className={style.slide}>
      <div className="absolute text-slate-50 text-xl">
        {slideNum} / {totlaSlide - 1}
      </div>
      <img src={image} alt={`image-${slideNum}`} className={style.slideImage} />
      <div className="text-2xl absolute bottom-6 w-full text-center text-slate-50">
        {caption}
      </div>
    </div>
  );
}

export default function Slide({ slides }) {
  const totlaSlide = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);

  useEffect(() => {
    console.log("re-render");
    const interval = setInterval(() => {
      setCurrentSlide(++currentSlide);
      setSelectedSlide(slides[currentSlide]);
      if (currentSlide >= totlaSlide) setCurrentSlide(-1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, selectedSlide, slides, totlaSlide]);
  return (
    <div className={style.wrapper}>
      {/* SLIDE CONTAINER START */}

      {/* SLIDE-1 */}
      {selectedSlide && (
        <SlideItem
          image={selectedSlide.image}
          caption={selectedSlide.caption}
          slideNum={currentSlide}
          totlaSlide={totlaSlide}
        />
      )}

      {/* END-1 */}

      {/* NEXT/PREV ACTION BUTTONS */}
      <div>
        <button className={style.actionButton}>
          <AiOutlineArrowLeft />
        </button>
        <button className={style.actionButton + " " + "right-0"}>
          <AiOutlineArrowRight />
        </button>
      </div>
      {/* ENDNEXT/PREV ACTION BUTTONS */}
      {/* SLIDE CONTAINER END */}
    </div>
  );
}
