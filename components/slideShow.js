import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const style = {
  wrapper:
    "relative max-w-screen w-full max-h-screen sm:max-h-[600px] bg-slate-200 h-[500px] mx-auto",
  slide: "w-full h-full animate-fade",
  slideImage: "h-full w-full object-cover",
  actionButton:
    "cursor-pointer absolute top-[50%] bg-teal-400 p-2 rounded-full text-white opacity-70 hover:opacity-100 transition-all ease-in delay-200",
  actionButtonImage: "text-white",
};

export function SlideItem({ image, caption, slideNum, totlaSlide }) {
  return (
    <div className={style.slide}>
      {/* <div className="absolute text-slate-50 text-xl">
        {slideNum} / {totlaSlide - 1}
      </div> */}
      <img src={image} alt={`image-${slideNum}`} className={style.slideImage} />
      <div className="text-2xl absolute bottom-6 w-full text-center text-slate-50">
        {caption}
      </div>
    </div>
  );
}

export default function SlideShow({ slides }) {
  const totalSlide = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);

  const gotoSlide = (index) => {
    if (index < 0) {
      setCurrentSlide(0);
    } else if (index > totalSlide - 1) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide(index);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide >= totalSlide - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((currentSlide) => currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide <= 0) setCurrentSlide(totalSlide - 1);
    else {
      setCurrentSlide((currentSlide) => currentSlide - 1);
    }
  };

  useEffect(() => {
    setSelectedSlide(slides[currentSlide]);
  }, [currentSlide, selectedSlide, slides, totalSlide]);
  return (
    <div className={style.wrapper}>
      {/* SLIDE CONTAINER START */}

      {/* SLIDE-1 */}
      {selectedSlide && (
        <SlideItem
          image={selectedSlide.image}
          caption={selectedSlide.caption}
          slideNum={currentSlide}
          totlaSlide={totalSlide}
        />
      )}

      {/* END-1 */}

      {/* NEXT/PREV ACTION BUTTONS */}
      <div>
        <button
          className={style.actionButton}
          onClick={() => handlePrevSlide()}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className={style.actionButton + " " + "right-0"}
          onClick={() => handleNextSlide()}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
      {/* ENDNEXT/PREV ACTION BUTTONS */}

      <div className="flex justify-center items-center mt-4 mb-4 gap-2 ">
        {slides.map((_, index) => (
          <div
            key={index}
            className="h-5 w-5 bg-primary cursor-pointer rounded-full"
            onClick={() => gotoSlide(index)}
          />
        ))}
      </div>
      {/* SLIDE CONTAINER END */}
    </div>
  );
}

// export default function SlideShow({ slides }) {
//   return (
//     <div className="max-w-screen overflow-hidden mx-auto my-0 max-h-[600px]">
//       {/* SLIDE SHOW */}
//       <div>
//         {/* SLIDE SHOW SLIDER */}
//         {slides.map((slide, index) => (
//           <div key={index} className="h-[400px] block">
//             <img src={slide.image} alt={slide.image} />
//             <div>{slide.caption}</div>
//           </div>
//         ))}

//         {/* END SLIDE SHOW SLIDER */}
//       </div>
//       <div className="flex justify-center items-center">
//         {slides.map((_, idx) => (
//           <div
//             key={idx}
//             className="inline-block h-5 w-5 rounded-full cursor-pointer bg-primary"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
