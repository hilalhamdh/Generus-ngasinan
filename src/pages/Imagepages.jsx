import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const photo = [
  {
    id: 1,
    image: "/images/1.jpg",
  },
  {
    id: 2,
    image: "images/lebaran.jpg",
  },
  {
    id: 3,
    image: "/images/rongsoan.jpg",
  },
  {
    id: 4,
    image: "/images/mewarnai.jpg",
  },
  {
    id: 5,
    image: "/images/4.jpg",
  },
  {
    id: 6,
    image: "/images/7.jpg",
  },
  {
    id: 7,
    image: "/images/makan2.jpg",
  },
  {
    id: 8,
    image: "/images/10.jpg",
  },
  {
    id: 9,
    image: "/images/11.jpg",
  },
  {
    id: 10,
    image: "/images/12.jpg",
  },
  {
    id: 11,
    image: "/images/II.jpg",
  },
  {
    id: 12,
    image: "/images/KK.jpg",
  },
  {
    id: 13,
    image: "/images/14.jpg",
  },
  {
    id: 14,
    image: "/images/15.jpg",
  },
  {
    id: 15,
    image: "/images/16.jpg",
  },
  {
    id: 16,
    image: "/images/17.jpg",
  },
  {
    id: 17,
    image: "/images/18.jpg",
  },
  {
    id: 18,
    image: "/images/19.jpg",
  },
  {
    id: 19,
    image: "/images/20.jpg",
  },
  {
    id: 20,
    image: "/images/21.jpg",
  },
  {
    id: 21,
    image: "/images/22.jpg",
  },
  {
    id: 22,
    image: "/images/23.jpg",
  },
  {
    id: 23,
    image: "/images/24.jpg",
  },
  {
    id: 24,
    image: "/images/25.jpg",
  },
  {
    id: 25,
    image: "/images/26.jpg",
  },
  {
    id: 26,
    image: "/images/28.jpg",
  },
  {
    id: 27,
    image: "/images/29.jpg",
  },
  {
    id: 28,
    image: "/images/30.jpg",
  },
  {
    id: 29,
    image: "/images/32.jpg",
  },
  {
    id: 30,
    image: "/images/33.jpg",
  },
  {
    id: 31,
    image: "/images/36.jpg",
  },
  {
    id: 32,
    image: "/images/37.jpg",
  },
  {
    id: 33,
    image: "/images/38.jpg",
  },
  {
    id: 34,
    image: "/images/39.jpg",
  },
  {
    id: 35,
    image: "/images/40.jpg",
  },
  {
    id: 36,
    image: "/images/B.jpg",
  },
  {
    id: 37,
    image: "/images/C.jpg",
  },
  {
    id: 38,
    image: "/images/E.jpg",
  },
  {
    id: 39,
    image: "/images/F.jpg",
  },
  {
    id: 40,
    image: "/images/H.jpg",
  },
  {
    id: 41,
    image: "/images/I.jpg",
  },
  {
    id: 42,
    image: "/images/J.jpg",
  },
  {
    id: 43,
    image: "/images/L.jpg",
  },
  {
    id: 44,
    image: "/images/M.jpg",
  },
  {
    id: 45,
    image: "/images/N.jpg",
  },
  {
    id: 46,
    image: "/images/O.jpg",
  },
  {
    id: 47,
    image: "/images/P.jpg",
  },
  {
    id: 48,
    image: "/images/Q.jpg",
  },
  {
    id: 49,
    image: "/images/R.jpg",
  },
  {
    id: 50,
    image: "/images/S.jpg",
  },
  {
    id: 51,
    image: "/images/T.jpg",
  },
  {
    id: 52,
    image: "/images/V.jpg",
  },
  {
    id: 53,
    image: "/images/W.jpg",
  },
  {
    id: 54,
    image: "/images/X.jpg",
  },
  {
    id: 55,
    image: "/images/Y.jpg",
  },
  {
    id: 56,
    image: "/images/Z.jpg",
  },
  {
    id: 57,
    image: "/images/AA.jpg",
  },
  {
    id: 58,
    image: "/images/BB.jpg",
  },
  {
    id: 59,
    image: "/images/CC.jpg",
  },
  {
    id: 60,
    image: "/images/DD.jpg",
  },
  {
    id: 61,
    image: "/images/EE.jpg",
  },
  {
    id: 61,
    image: "/images/FF.jpg",
  },
  {
    id: 62,
    image: "/images/GG.jpg",
  },
  {
    id: 63,
    image: "/images/LL.jpg",
  },
  {
    id: 64,
    image: "/images/MM.jpg",
  },
  {
    id: 65,
    image: "/images/NN.jpg",
  },
  {
    id: 66,
    image: "/images/OO.jpg",
  },
  {
    id: 67,
    image: "/images/PP.jpg",
  },
  {
    id: 68,
    image: "/images/QQ.jpg",
  },
  {
    id: 69,
    image: "/images/RR.jpg",
  },
  {
    id: 70,
    image: "/images/SS.jpg",
  },
];

function Imagepages() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="mainpage pt-32 bg-gradient-to-r from-rose-100 to-sky-300 to-90% ">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className=" container mx-auto px-4 py-2 items-center justify-items-center"
        >
          <div className=" md:w-[1505px] w-[380px] md:h-24 h-16   shadow-white rounded-lg ">
            <h1 className="items-center md:pt-9 pb-4 pt-3 font-semibold text-center md:text-3xl text-xl  shadow-lg shadow-red-200  ">
              FOTO - FOTO GENERUS
            </h1>
          </div>

          <div className="images grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 pt-10 ">
            {photo.map((photo) => (
              <div key={photo.id}>
                <div className="bg-white w-full h-[300px]">
                  <img
                    className="object-cover object-center w-full h-[300px] max-w-full rounded-lg py-2 px-2 "
                    src={photo.image}
                    alt="gallery-photo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Imagepages;
