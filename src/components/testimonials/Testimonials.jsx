import React from "react";

/* CSS */
import "./Testimonials.css";

/* React Slick */
import Slider from "react-slick";

/* SVG */
import Quotation from "../../assets/Quotation.svg";

/* DATA DUMMY */
const TestimonialData = [
  {
    text: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    img: "https://car-rental-ten.vercel.app/static/media/pfp1.ba7974ae51bb5d44fa69.jpg",
    name: "John Doe",
  },
  {
    text: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    img: "https://car-rental-ten.vercel.app/static/media/pfp2.fd9b1716200244ed8905.jpg",
    name: "Blake Gatsby",
  },
  {
    text: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    img: "https://car-rental-ten.vercel.app/static/media/pfp2.fd9b1716200244ed8905.jpg",
    name: "Ron Awad",
  },
];

const Testimonials = () => {
  const settings = {
    arrows: true,
    speed: 1000,
    accessibility: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials center">
        <h3 className="testimonial-subheading">Reviewed by People</h3>
        <h1 className="testimonial-heading">Client's Testimonials</h1>
        <p className="testimonial-description">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
        <div className="testimonial-library">
          <div>
            <Slider {...settings}>
              {TestimonialData.map((item) => (
                <div className="testimonial-items">
                  <div className="testimonial-item">
                    <p className="testimonial-text">"{item.text}"</p>
                    <div className="bottom">
                      <img src={item.img} className="testimonial-image" />
                      <h5 className="testimonial-name">{item.name}</h5>
                      <img src={Quotation} className="testimonial-quotation" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
