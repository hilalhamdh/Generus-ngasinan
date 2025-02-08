import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Bazar from "/images/bazar.jpg";
import { useNavigate } from "react-router-dom";

const Berita3 = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="Berita2 pt-24 pb-10 bg-gradient-to-r from-neutral-500 to-slate-400 to-90%  md:bg-[url(/images/bg2.jpg)]">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col bg-[url(/images/bg.jpg)] md:mx-60 rounded-xl ">
            <h3 className=" font-semibold text-center text-3xl pb-4 pt-8">
              Bazar Remaja Ngasinan
            </h3>
            <img
              src={Bazar}
              alt="dita"
              className="size-11/12 md:size-10/12 h-[400px] rounded-md md:h-[500px] mx-auto pt-1"
            />
            <p className=" text-justify p-2 pt-4 md:p-6 text-xl ">
              Remaja kelompok Ngasinan mengikuti kegiatan bazar yang di
              selenggarakan oleh kmm desa timur II, Dengan kekompakan dan
              kesemangatan remaja kelompok Ngasinan, Alhamdulillah Acara Bazar
              kali ini berjalan dengan lancar dan semua makanan serta minuman
              terjual ludesss.
              <br></br>
              <br />
              Adapun tujuan dari penyelanggaraan ini bagi kami adalah untuk
              mempererat kekompakan dan kesemangatan remaja Ngasinan. Semoga
              kedepannya semakin kompak dan rukun.Aaamiiinnn...
              <br />
              <br />
            </p>
            <button
              className="bg-cyan-400 mx-auto w-20 mb-2 rounded text-center"
              onClick={() => navigate("/")}
            >
              Kembali
            </button>
          </div>
          {/* <div className="bg-slate-600 p-3 rounded-3xl ">
            </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Berita3;
