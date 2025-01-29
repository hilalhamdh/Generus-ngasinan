// import Home from "../assets/images/5.jpg";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Contactpages from "./Contactpages";
import Studio from "/images/studio.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cardpages from "./Cardpages";
import Berita from "./Berita";
import About from "./About";

// import CarouselPages from "../component/Carouselpages";

const cartImage = [
  {
    id: 1,
    image: "/images/56.jpg",
    title: "Festival Anak Sholeh",
    description: `Alhamdulillah, Dalam acara yang diselenggarakan oleh Desa
                  Timur 2,Caberawit ngasinan tampil sangat antusias dengan
                  berhasil menyabet 3 piala pada perlombaan tersebut. adapun
                  juara yang di dapat adalah Juara 1 Lomba Murottal Alquran,
                  Juara 1 Lomba Mewarnai kategori Paud dan Juara 2 Lomba
                  mewarnai kategori Kelas 4-6 Sd`,
    info: "Baca Selengkapnya..",
    calender: "Minggu, 3 November 2024",
  },
  {
    id: 2,
    image: "/images/53.jpg",
    title: "Andita Juara 1 Murottal",
    description: ` Asyikk Mba Dita juara 1 Murottal, sebuah kebanggan bagi diri
                    saya sendiri, Saya tau bacaan dia bagaiman sejak pertama
                    kali saya datang, sangat jelek ngga sih wkwk. Setelah saya
                    tau bacaannya kurang bagus pernah suatu ketika dengan
                    paksaan saya buat dia membaca satu halaman, mba Ditanya
                    malah nangisss hadehhh cupuuuuu!. Dan pada akhirnya dengan
                    paksaan itu bacaan mba dita jadi lancarrrr. alhamdulillah.`,
    info: "Baca Selengkapnya..",
    link: "https://github.com/login",
    calender: "Minggu, 3 November 2024",
  },
  {
    id: 3,
    image: "/images/talita.jpg",
    title: "Talita & Izza Juara Mewarnai",
    description: `Yeiiii, mba Talita dan mba Izza juga mendapatkan juara 1 & 2 Mewarnai, sungguh luar biasa, ngga sia-sia selama sebulan ngajinya mewarnai tokk wkkwkw. `,
    info: "Baca Selengkapnya..",
    link: "./imagepages",
    calender: "Minggu, 3 November 2024",
  },
  {
    id: 4,
    image: "/images/bazar.jpg",
    title: "Bazar Remaja Ngasinan",
    description: ` Dengan kekompakan dan kesemangatan remaja kelompok Ngasinan,
                    Alhamdulillah Acara Bazar kali ini berjalan dengan lancar
                    dan semua makanan serta minuman terjual ludesss. Adapun
                    tujuan dari penyelanggaraan ini bagi kami adalah untuk
                    mempererat kekompakan dan kesemangatan remaja Ngasinan.
                    Semoga kedepannya semakin kompak dan rukun.Aaamiiinnn...`,
    calender: "Minggu, 3 November 2024",
  },
  {
    id: 5,
    image: "/images/lebaran.jpg",
    title: "Hari Raya Idhul Fitri 2024",
    description: ` Setelah melaksanakan sholad ied, Generus ngasinan mengadakan
                    sesi foto bersama, ternyata jumlahnya sangat banyak yaaaa,
                    semoga selalu kompak dan lancar ngajinya.`,
    calender: "10 April 2024 ",
  },
  {
    id: 6,
    image: "/images/32.jpg",
    title: "Berbuka Puasa Bersama",
    description: `Alhamdulillah Puasa terasa lega, ketika melihat menu buka
                    puasa pada hari itu, menunya diantaranya Nasi Pecel Lele
                    dengan sambel yang pedas, dan minumannya es jeruk.`,
    calender: " 04 April 2024",
  },
  {
    id: 7,
    image: "/images/4.jpg",
    title: "Lomba 17 Agustus 2024",
    description: `  Untuk memeriahkan hari kemerdekaan indonesia, kami dari
                    caberawit ngasinan mengadakan berbagai macam lomba, salah
                    satu contohnhya yaitu lomba makan kerupu, lomba memindahkan
                    air, lomba cerdas cermat dan lomba canto cething. setiap
                    lomba memiliki hadiah yang spesiallah pokoknya.`,
    calender: "17 Agustus 2024",
  },
  {
    id: 8,
    image: "/images/1.jpg",
    title: "Liburan Ke Intan Pari",
    description: `Kegiatan ini merupakan agenda rutin tahunan caberawit, biar
                    ngga bosen ngaji ya kan Hehe, Rasanya menyenangkan,
                    menggembirakan dan penuh canda tawa para caberawit.`,
    calender: "02 Maret 2024",
  },
];

function Homepages() {
  useEffect(() => {
    AOS.init();
  }, []);
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
            {cartImage.map((cartImage) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
                key={cartImage.id}
              >
                <img
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="w-full h-[300px]"
                  src={cartImage.image}
                />

                <div className="px-6 py-4 ">
                  <div className="font-bold text-xl mb-2">
                    {cartImage.title}
                  </div>
                  <p className="text-gray-700 text-base text-justify line-clamp-5  ">
                    {cartImage.description}
                  </p>
                </div>
                <div className="text-sm font-semibold text-start text-gray-700  mb-2 ml-5 mr-5 border-slate-300 border-b-4">
                  <a href={cartImage.link}>{cartImage.info}</a>
                </div>
                <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5  ">
                  <i className="ri-calendar-line mr-2"></i>
                  {cartImage.calender}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Contactpages />
        <Cardpages />
        <Footer />
      </div>
    </>
  );
}

export default Homepages;
