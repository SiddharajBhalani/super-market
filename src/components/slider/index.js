import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frozen from "../../Images/frozen/p1garlic.png"

const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 4 };

export const RecentlyViewSlider = () => (
  <Slider {...settings}>
    <div><img src={Frozen} alt="Slide 1" /></div>
    <div><img src={Frozen} alt="Slide 2" /></div>
    <div><img src={Frozen} alt="Slide 3" /></div>
    <div><img src={Frozen} alt="Slide 4" /></div>
    <div><img src={Frozen} alt="Slide 5" /></div>
    <div><img src={Frozen} alt="Slide 6" /></div>
    <div><img src={Frozen} alt="Slide 7" /></div>
    <div><img src={Frozen} alt="Slide 8" /></div>
  </Slider>
);
