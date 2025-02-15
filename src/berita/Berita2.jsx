import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Dita from "/images/53.jpg";
import { useNavigate } from "react-router-dom";

const Berita2 = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="Berita2 pt-28 pb-10 bg-gradient-to-r from-neutral-500 to-slate-400 to-90%  md:bg-[url(/images/bg2.jpg)]">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col bg-[url(/images/bg.jpg)] md:mx-60 rounded-xl ">
            <h3 className=" font-semibold text-center text-3xl pb-4 pt-8">
              Andita Nola Juara Lomba Murottal Alquran
            </h3>
            <img
              src={Dita}
              alt="dita"
              className="size-11/12 md:size-10/12 h-[400px] rounded-md md:h-[500px] mx-auto pt-1"
            />
            <p className=" text-justify p-2 pt-4 md:p-6 text-xl ">
              Festival anak sholeh merupakan ajang 1 kali dalam setahun yang
              diadakan oleh KMM Desa Timur II Membuat antusias caberawit sangat
              tinggi untuk menampilkan penampilan yang terbaiknya diajang itu.
              Dalam ajang ini Mba Dita juara 1 Murottal, sebuah kebanggan bagi
              kami khususnya kelompok Ngasinan yang berhasil meraih hasil yang
              memuaskan bagi kami. <br />
              <br />
              Kami tau proses dia dalam berlatih membaca alquran, sampai suatu
              ketika dia nangis karena di paksa oleh Mas Hilal untuk membaca
              alquran sampai satu Halaman haha. berkat itu semua Alhamdulillah
              Mba Dita berhasil tampil maksimal dengan meraih juara 1 diajang
              festival anak sholeh tersebut. Semoga kedepannya bisa meraih juara
              dan kesuksesan yang lebih banyak lagi. Aaaminnn.
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
export default Berita2;
