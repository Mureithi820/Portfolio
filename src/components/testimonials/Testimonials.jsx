// import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import React, { useEffect, useState } from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/bastian.png";
import AVTR2 from "../../assets/marie.png";
import AVTR3 from "../../assets/ksenia.png";
import AVTR4 from "../../assets/iselin.png";
import AVTR5 from "../../assets/balraj.png";

// import required modules
// import { Pagination } from "swiper";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Bastian",
    review:
      "Victor comes up with ideas easily, and his ability to question the status quo is impressive. In our daily work, he drives our team not only with constant contribution but also with his visionary mind.",
  },
  {
    avatar: AVTR2,
    name: "Marie",
    review:
      "We worked closely in a team over a period of four months, and I couldn't have asked for a better partner! Victor is extremely dedicated and always asks the right questions to be on the right track.",
  },
  {
    avatar: AVTR3,
    name: "Ksenia",
    review:
      "I had the pleasure of working with Victor on an extensive project, and Victor is very tidy, structured, and keen to find good solutions for problems. For me, he has been a good partner, and I have benefited a lot from discussing with him.",
  },
  {
    avatar: AVTR4,
    name: "Iselin",
    review:
      "I worked with Victor on a challenging trend analysis project. I would describe him as solution-oriented and adaptable. Last but not least, he is creative, good at design, and a great collaborator!",
  },
  {
    avatar: AVTR5,
    name: "Balraj",
    review:
      "I had the pleasure of working with Victor on a very challenging project! He is good at finding simple and creative solutions to complex challenges. He is also very helpful, motivated, and has great work capacity.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, []); // Run the effect only once on component mount
  return (
    <section id="testimonials">
      <h5>Reviews from coworkers</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${
              index === currentIndex
                ? "testimonial--active"
                : "testimonial--inactive"
            }`}
          >
            <div className="coworker-avatar">
              <img src={testimonial.avatar} alt="Coworker" />
            </div>
            <h5 className="coworker__name">{testimonial.name}</h5>
            <small className="coworker__review">{testimonial.review}</small>
          </div>
        ))}
      </div>
      <div className="indicators">
        {data.map((_, index) => (
          <span
            key={index}
            className={`indicator ${
              index === currentIndex ? "indicator--active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

// https://swiperjs.com/demos#pagination-dynamic

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   const isPrevDisabled = currentIndex === 0;
//   const isNextDisabled = currentIndex === data.length - 1;

//   return (
//     <section id="testimonials">
//       <h5>Reviews from coworkers</h5>
//       <h2>Testimonials</h2>
//       <div className="container testimonials__container">
//         <div className="testimonial">
//           <div className="coworker-avatar">
//             <img src={data[currentIndex].avatar} alt="Coworker" />
//           </div>
//           <h5 className="coworker__name">{data[currentIndex].name}</h5>
//           <small className="coworker__review">
//             {data[currentIndex].review}
//           </small>
//         </div>
//         <div className="Buttons">
//           <button
//             className="PaginationButton"
//             onClick={prevTestimonial}
//             disabled={isPrevDisabled}
//           >
//             <HiChevronLeft />
//             Previous
//           </button>
//           <span>
//             {currentIndex + 1}/{data.length}
//           </span>
//           <button
//             className="PaginationButton"
//             onClick={nextTestimonial}
//             disabled={isNextDisabled}
//           >
//             <HiChevronRight />
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
export default Testimonials;
