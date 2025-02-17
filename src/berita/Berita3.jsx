import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Bazar from "/images/bazar.jpg";
import Remaja from "/images/remaja.jpg";
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
              src={Remaja}
              alt="Remaja"
              className="size-11/12 md:size-10/12 h-[400px] rounded-md md:h-[500px] mx-auto pt-1"
            />
            <p className=" text-justify p-2 pt-4 md:p-6 text-xl ">
              Remaja kelompok Ngasinan mengikuti kegiatan bazar yang di
              selenggarakan oleh kmm desa timur II, Dengan kekompakan dan
              kesemangatan remaja kelompok Ngasinan, Alhamdulillah Acara Bazar
              kali ini berjalan dengan lancar dan semua makanan serta minuman
              terjual ludesss.
            </p>

            <br />
            <div className="grid grid-col-1 gap-1 md:grid-cols-2 md:gap-0">
              <div>
                <p className="text-justify p-2 py-1  md:p-3 md:pl-4 text-xl">
                  Dalam acara bazar ini remaja ngasinan berjualan dengan
                  berbagai menu yang enak-enak dan kreatif, diantara menunya
                  yaitu ada Mie Gacoan, Siomay, Es Kul-kul, Es Coklat dan
                  tentunya tidak ketinggalan Es teh.
                  <br></br>
                  <br></br>
                  Adapun tujuan dari penyelanggaraan ini bagi kami adalah untuk
                  mempererat kekompakan dan kesemangatan remaja
                  Ngasinan.sehingga kedepannya semakin semangat dalam ibadahnya
                  kepada alloh. Semoga kedepannya semakin kompak, rukun dan
                  menjadi anak-anak yang sholih-sholiha serta lancar rezekinya
                  sukses dunia dan akhirotnya, etss tidak lupa mendapat jodoh
                  yang barokah tentunya .Aaamiiinnn...
                </p>
              </div>

              <div className="m-3 md:pr-1 md:mr-5 ">
                <img
                  src={Bazar}
                  className="rounded-lg shadow-lg "
                  alt="bazar remaja"
                />
              </div>
            </div>

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
