import Lebaran from "/images/lebaran.jpg";
import Makan2 from "/images/makan2.jpg";
import Bazar from "/images/bazar.jpg";
import Bazarr from "/images/remaja.jpg";
import Turnamen from "/images/DD.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Mainpages() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />

      <div className="homepage pb-5 bg-gradient-to-r from-rose-400 to-sky-300 to-90%">
        <div className="container mx-auto px-4">
          <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
            <div className="box">
              <h1
                data-aos="fade-down"
                data-aos-duration="2000"
                className="lg:text-5xl/tight text-2xl font-bold mb-2 text-center "
              >
                Remaja Ngasinan
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="py-2 text-sm font-semibold"
              >
                Hiii Remaja Ngasinan
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="text-base text-justify mb-2  "
              >
                Halaman ini menceritakan tentang kegiatan-kegiatan apa saja yang
                telah dilakukan oleh remaja Ngasinan selama priode
                2024-2025!!!!....
              </p>
              {/* <a
                href="#"
                className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
              >
                Scrolll kebawah yaa!!
                <i className="ri-eye-line ms-1"></i>
              </a> */}
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="2000">
              <img
                src={Bazarr}
                // data-aos="zoom-in"
                // data-aos-duration="2000"
                alt="Halaman Homepage"
                className="md:w-full w-[400px]  mx-auto md:m-0  rounded-xl  shadow-lg shadow-white  h-[450px] md:h-[550px] "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mainpage pt-2 bg-gradient-to-r from-rose-100 to-sky-300 to-90%">
        <div className="container mx-auto px-2 md:py-2 py-1 items-center justify-items-cente">
          <div className=" md:w-[1515px] w-[380px] md:h-24 h-16  shadow-white rounded-lg ">
            <h1 className=" items-center md:pt-9 pt-5 pb-4 font-semibold text-center md:text-3xl text-xl  shadow-lg shadow-red-200  ">
              KEGIATAN REMAJA
            </h1>
          </div>
          {/* <div className="grid grid-cols-1 justify-items-center items-center pt-2">
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" w-full h-[300px] md:w-[900px] md:h-[500px] rounded items-center justify-items-center"
              src={Lebaran}
              alt="Lebaran Bersama Generus"
            />
          </div> */}
          <div className="main grid md:grid-cols-4 grid-cols-1 items-center gap-10 pt-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Lebaran}
                alt="Lebaran Bersama Generus"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Hari Raya Idhul Fitri 2024
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Setelah melaksanakan sholad ied, Generus ngasinan mengadakan
                  sesi foto bersama, ternyata jumlahnya sangat banyak yaaaa,
                  semoga selalu kompak dan lancar ngajinya.
                </p>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>10 April 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Makan2}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Masak-Masak Sate</div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Acara keakraban yang biasanya diisi dengan yaa makan-makan,
                  masak-masak bareng. ketika acara seperti ini alhamdulillah
                  banyak yang datang, tapi kalo ngaji kenapa ngga sebanayak ini
                  yak wkwkw.
                </p>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>29 Juni 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Turnamen}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Turnamen 17 Agustus{" "}
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Moment seruuuu dan menegangkan wkwk,kita bermain dengan baik
                  tapi dalam permainan bermain baik belum tentu menang, kita
                  kalah dalam turnamen itu, banyak insiden yang terjadi dari
                  cekcok, kecurangan tim lawan dan perkelahian. tetap semangat
                  teman-teman dan terus berlatih semoga tahun 2025 bisa membawa
                  pulang piala yang telah lama kita rindukan untuk kembali ke
                  rumah kita.
                </p>
              </div>
              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>18 Agustus 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Bazar}
                alt="Lebaran Bersama Generus"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Bazar Remaja Ngasinan
                </div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Dengan kekompakan dan kesemangatan remaja kelompok Ngasinan,
                  Alhamdulillah Acara Bazar kali ini berjalan dengan lancar dan
                  semua makanan serta minuman terjual ludesss. Adapun tujuan
                  dari penyelanggaraan ini bagi kami adalah untuk mempererat
                  kekompakan dan kesemangatan remaja Ngasinan. Semoga kedepannya
                  semakin kompak dan rukun.Aaamiiinnn...
                </p>
              </div>

              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>3 November 2024
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="w-full h-[300px]"
                src={Bazarr}
                alt="Lebaran Bersama Generus"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Personil Bazar</div>
                <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none">
                  Bazarr tahun 2025 ini terbilang sangat sukses ya, selain
                  mendapat keuntungan yang banyak juga meningkatkan kekompakan
                  dan kerja sama remaja. mulai dari kita musyawaroh lalu di
                  eksekusi dengan lancar. semoga tahun-tahun kedepannya bisa
                  semakin lancar dan mendapat keuntungan di ivent bazar
                  selanjutnya yaak,,sssstt satu pesen : milih menu yang enak dan
                  cepat laku yak wwkw contohnya mie goreng bungkus plastik.
                </p>
              </div>

              <div className="text-sm font-semibold text-end text-gray-700  mb-2 mr-5 ">
                <i className="ri-calendar-line mr-2"></i>3 November 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Mainpages;
