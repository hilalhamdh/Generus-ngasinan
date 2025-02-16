// import Home from "../assets/images/5.jpg";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Contactpages from "./Contactpages";
import Studio from "/images/studio.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cardpages from "./Cardpages";
import About from "./About";
import Dita from "/images/53.jpg";
import { useNavigate } from "react-router-dom";
import Talita from "/images/talita.jpg";
import Bazar from "/images/bazar.jpg";

// import CarouselPages from "../component/Carouselpages";

const cartImage = [
  {
    id: 4,
    image: "/images/4.jpg",
    title: "Lomba 17 Agustus 2024",
    description: `  Untuk memeriahkan hari kemerdekaan indonesia, kami dari
                    caberawit ngasinan mengadakan berbagai macam lomba, salah
                    satu contohnhya yaitu lomba makan kerupu, lomba memindahkan
                    air, lomba cerdas cermat dan lomba canto cething. setiap
                    lomba memiliki hadiah yang spesiallah pokoknya.`,
    calender: "17 Agustus 2024",
  },
];

function Homepages() {
  useEffect(() => {
    AOS.init();
  }, []);

  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* <CarouselPages /> */}

      <div className="homepage pb-10 bg-gradient-to-r from-rose-400 to-sky-300 to-90%">
        <div className="container mx-auto px-4">
          <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
            <div className="box">
              <h1
                data-aos="fade-down"
                data-aos-duration="2000"
                className="lg:text-5xl/tight text-3xl font-medium mb-6 "
              >
                Generus Ngasinan
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="py-3 text-sm font-semibold"
              >
                Hiii Generus Ngasinan, Apa Kabar Hari Ini?
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="text-base text-justify mb-7  "
              >
                Halaman ini merupakan cerita kenangan perjalanan Mas Hilal
                sebagai Mubaligh Tugasan di Kelompok Ngasinan Priode Februari
                2024 - Februari 2025
              </p>
              <a
                href="#"
                className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
              >
                Tentang Kami<i className="ri-eye-line ms-1"></i>
              </a>
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="2000">
              <img
                src={Studio}
                // data-aos="zoom-in"
                // data-aos-duration="2000"
                alt="Halaman Homepage"
                className="md:w-full w-[400px]  mx-auto md:m-0  rounded-xl  shadow-lg shadow-white  h-[450px] md:h-[550px] "
              />
            </div>
          </div>
        </div>
      </div>

      <About />

      <div className="mainpage pt-5 bg-gradient-to-r from-rose-200 to-sky-300 to-90% ">
        <div className="container mx-auto px-4 py-2 ">
          <h1 className="text-center lg:text-4xl/tight text-2xl font-semibold shadow-2xl shadow-sky-200">
            Kabar Berita
          </h1>
          <div className="main grid md:grid-cols-4 grid-cols-1  items-center justify-items-center gap-10 pt-10 ">
            {/* {cartImage.map((cartImage) => ( */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Dita}
              />

              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">
                  Andita Juara 1 Murottal Alquran
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-3  ">
                  Festival anak sholeh merupakan ajang 1 kali dalam setahun yang
                  diadakan oleh KMM Desa Timur II Membuat antusias caberawit
                  sangat tinggi
                </p>
              </div>
              <div className="text-sm font-semibold text-start text-gray-700  mb-2 ml-5 mr-5 border-slate-300 border-b-4">
                <a
                  href
                  className="hover:text-green-300"
                  onClick={() => navigate("/berita2")}
                >
                  Baca Selengkapnya
                </a>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5  ">
                <i className="ri-calendar-line mr-2"></i>
                Minggu, 3 November 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Talita}
              />

              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">
                  Talita & Izza Juara Lomba Mewarnai
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-3  ">
                  Mba Talita dan Mba Izza juga mendapatkan juara Mewarnai pada
                  kategori paud dan sd kelas 5, mereka semangat dan antusias
                  untuk mengikuti ajang lomba tahunan ini
                </p>
              </div>
              <div className="text-sm font-semibold text-start text-gray-700  mb-2 ml-5 mr-5 border-slate-300 border-b-4">
                <a
                  href
                  className="hover:text-green-300"
                  onClick={() => navigate("/berita1")}
                >
                  Baca Selengkapnya
                </a>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5  ">
                <i className="ri-calendar-line mr-2"></i>
                Minggu, 3 November 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Bazar}
              />

              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">
                  Remaja Ngasinan Berjualan Mie Pedes Di Bazar
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-3  ">
                  Dengan kekompakan dan kesemangatan remaja kelompok Ngasinan,
                  Alhamdulillah Acara Bazar kali ini berjalan dengan lancar dan
                  semua makanan serta minuman terjual ludesss. Adapun tujuan
                  dari penyelanggaraan ini bagi kami adalah untuk mempererat
                  kekompakan dan kesemangatan remaja Ngasinan. Semoga kedepannya
                  semakin kompak dan rukun.Aaamiiinnn...
                </p>
              </div>
              <div className="text-sm font-semibold text-start text-gray-700  mb-2 ml-5 mr-5 border-slate-300 border-b-4">
                <a
                  href
                  className="hover:text-green-300"
                  onClick={() => navigate("/berita3")}
                >
                  Baca Selengkapnya
                </a>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5  ">
                <i className="ri-calendar-line mr-2"></i>
                Minggu, 3 November 2024
              </div>
            </div>
          </div>
          ,
        </div>
        <Contactpages />
        <Cardpages />
        <Footer />
      </div>
    </>
  );
}

export default Homepages;
