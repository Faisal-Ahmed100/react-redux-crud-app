import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#169987] flex h-screen items-center relative" id="client-testimonials">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col mb-10">
          <p className="font-p text-3xl font-bold capitalize text-white">
            client says
          </p>
          <h2 className="text-5xl font-semibold text-white mb-3">
            Testimonials
          </h2>
        </div>
        {/* testimonial */}

        <Slider {...settings}>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
          <div>
            <div className="text-white flex flex-col p-3 gap-3 text-center md:text-left">
              <div className="flex items-center flex-col md:flex-row gap-3">
                <div className="md:w-[90px] w-[150px] h-[150px] md:h-[90px]">
                  <img
                    className="w-full object-cover h-full rounded-full"
                    src="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Faisal Ahmad</h2>
                  <p className="text-sm">Lorem ipsum dolor lorem</p>
                  <div className="flex justify-center md:justify-start">
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, odio! consectetur adipisicing elit. Rerum, odio!
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
