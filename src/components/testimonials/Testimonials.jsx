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
      "Victor has a remarkable ability to challenge the established quo and generates ideas with ease. He inspires our team in the course of our everyday work not only with his unwavering contributions but also with his creative ideas.",
  },
  {
    avatar: AVTR2,
    name: "Marie",
    review:
      "Over the course of three months, we worked closely as a team, and I couldn't have wished for a greater partner! Victor is incredibly committed and makes sure to ask the right questions to stay on course.",
  },
  {
    avatar: AVTR3,
    name: "Tenza",
    review:
      "Victor is very organized, neat, and eager to find good solutions for problems. I had the pleasure of working with him on a large project.",
  },
  {
    avatar: AVTR4,
    name: "Lucy",
    review:
      "Victor and I collaborated on a difficult trend analysis research. He is adaptive and solution-focused, in my opinion. Not to mention, he is a fantastic collaborator, creative, and skilled designer.",
  },
  {
    avatar: AVTR5,
    name: "Balraj",
    review:
      "Victor and I collaborated on a really difficult assignment, which was enjoyable! He excels at solving difficult problems in a straightforward and original way. Additionally, he is highly capable, driven, and helpful.",
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
