import banOne from "../src/assets/banner.jpg"
import banTwo from "../src/assets/banner2.jpg"
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}
    ><MdNavigateNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick}
      ><GrFormPrevious />
      </div>
  );
}

function App() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
 

  return (
   
    <>
    <div className="banner">
    <Slider {...settings}>
        <div className="main">
          <img src={banOne} alt="" />
          </div>
        <div className="main">
          <img src={banTwo} alt="" />
        </div>
        <div className="main">
          <img src={banTwo} alt="" />
        </div>
        <div className="main">
          <img src={banTwo} alt="" />
        </div>
        <div className="main">
          <img src={banTwo} alt="" />
        </div>
     </Slider>
    </div>
    </>
  )
}

export default App
