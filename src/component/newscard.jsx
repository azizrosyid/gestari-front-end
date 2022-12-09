/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
function Newscard() {
  const [data, setData] = useState();

  let fetchdata = async () => {
    let res = await axios.get(
      "https://berita-indo-api.vercel.app/v1/antara-news/warta-bumi"
    );

    setData(res.data.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div class="  h-full flex flex-col justify-center items-center content-center py-10 gap-5   ">
        <h1 class="text-center text-2xl font-bold">
          Berita Lingkungan Hari Ini
        </h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="pr-5 py-5 "
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            superdesktop: {
              breakpoint: {
                max: 4000,
                min: 2000,
              },
              items: 4,
              partialVisibilityGutter: 0,
            },
            desktop: {
              breakpoint: {
                max: 2000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data ? (
            data.map((res, index) => {
              return (
                <a href={res.link} target="_blank" rel="noreferrer">
                  <div className="hover:scale-110 max-w-sm bg-white border border-gray-200 rounded-lg m-4 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="rounded-t-lg w-full h-52 object-cover"
                      src={res.image}
                      alt=""
                    />

                    <div className="p-5 w-full h-48">
                      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                        Antara News
                      </h5>

                      <h5 className="mb-2 text-sm md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {res.title}
                      </h5>
                    </div>
                  </div>
                </a>
              );
            })
          ) : (
            <></>
          )}
        </Carousel>
      </div>
    </>
  );
}

export default Newscard;
