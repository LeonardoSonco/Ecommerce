import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { fetchDataDiscount } from "../../data/data";

export default function Carousel() {
  const [discount, setDiscount] = useState([]);
  useEffect(() => {
    async function getDiscount() {
      try {
        const discountData = await fetchDataDiscount();
        if (discountData) {
          const mappedDiscountData = discountData.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.image,
            imageURL: data.imageURL,
            description: data.description,
            discount: data.discount,
          }));
         
          setDiscount(mappedDiscountData);
          
        } else {
          console.error("Dados não encontrados");
        }
      } catch (error) {
        console.error("Erro ao buscar os celulares:", error);
      }
    }

    getDiscount();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        //autoplay={{
        // delay: 10500,
        //  disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {discount.map((item) => (
          <SwiperSlide key={item.id} className="py-10 mr-0">
            <div className="flex justify-around items-center w-full bg-blueCarousel text-white rounded-xl py-8 pb-16">
              <div className="text-start my-4 tracking-widest pl-8" >
                <p>{item.description}</p>
                <h3 className="text-5xl  font-bold py-4">{item.name}</h3>
                <span>{item.discount}</span>
              </div>
              <div className="pr-6">
                <div className="absolute container-ball transform -translate-x-1/2">
                  <div className="ball"></div>
                </div>
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="relative z-10 w-56 h-56 object-contain "
                />

                <div className="absolute container-ball2 transform -translate-x-1/2">
                  <div className="ball2"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
