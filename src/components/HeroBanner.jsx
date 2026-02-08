import { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";
import slideImage1 from "../assets/images/slide1.png";
import slideImage2 from "../assets/images/slide2.png";
import slideImage3 from "../assets/images/slide3.png";

const slides = [
  {
    title: "找回日常的一杯好茶",
    subtitle:
      "一盞茶\n足以重新整理繁亂心緒。\n各具風格的山林茶選\n讓最自然的回甘\n陪伴您度過每個犒賞自己的時刻。",
    bgImage: slideImage1,
    captionHeight: 760,
  },
  {
    title: "一杯好茶，更好的器具",
    subtitle:
      "好的器物\n是釋放茶香的關鍵。\n精選職人手作茶具\n透過溫潤質地細膩\n鎖住每一泡茶湯的層次與靈魂。",
    bgImage: slideImage2,
    captionHeight: 800,
  },
  {
    title: "泡一杯，留住生活優雅",
    subtitle:
      "不必等待特別的日子\n今天的你\n值得用最好的茶香加冕。\n讓泡茶的儀式感\n成為生活裡最優雅的留白。",
    bgImage: slideImage3,
    captionHeight: 800,
  },
];

export default function HeroBanner() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const instance = new Carousel(carouselRef.current, {
      interval: 3000,
      ride: "carousel",
    });
    return () => instance.dispose();
  }, []);

  return (
  <div
    id="heroCarousel"
    className="carousel slide hero-carousel"
    ref={carouselRef}
  >
    {/* 輪播指示器 */}
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-label={`前往第 ${index + 1} 張投影片`}
        />
      ))}
    </div>

    {/* 輪播圖片區域 */}
    <div className="carousel-inner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? 'active' : ''}`}
        >
          <img
            src={slide.bgImage}
            className="d-block w-100"
            alt={slide.title}
          />
          <div className="carousel-caption">
            <div className="caption-content">
              <div className="caption-text-group">
                <p className="caption-subtitle">{slide.subtitle}</p>
                <h3 className="caption-title">{slide.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* 前後控制按鈕 */}
    <button 
      className="carousel-control-prev" 
      type="button" 
      data-bs-target="#heroCarousel" 
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button 
      className="carousel-control-next" 
      type="button" 
      data-bs-target="#heroCarousel" 
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
} 
