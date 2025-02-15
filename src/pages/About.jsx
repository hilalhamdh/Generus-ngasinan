import About1 from "/images/about1.png";
import About2 from "/images/about3.png";

import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();

  return (
    <>
      <div className="mainpage pt-5 bg-gradient-to-r from-rose-200 to-sky-300 to-90% ">
        <div className="container mx-auto px-4 py-2 ">
          <h1 className="text-center lg:text-4xl/tight text-2xl font-semibold shadow-2xl shadow-sky-200">
            ABOUT US
          </h1>
          <div className="main items-center justify-items-center pt-10 ">
            <h1 className="text-center text-3xl ">
              TPA BAABUL JANNAH KELOMPOK NGASINAN
            </h1>
            <p className="text-justify md:text-center text-sm pt-5 md:px-16">
              TPA Baabul Jannah merupakan salah satu lembaga pendidikan yang
              dikelola oleh Lembaga Dakwah Islam Indonesia (LDII) TPA Baabul
              Jannah ini merupakan salah satu bentuk kepedulian dan keseriusan
              yang ditunjukkan kepada warga LDII dalam membina generasi
              penerusnya agar menjadi Generus yang unggul dan memiliki ahklaqul
              karimah yang baik. Salah satunya adalah TPA Baabul Jannah yang
              berada di Kelompok Ngasinan, Desa Timur II, Daerah Solo Selatan.
            </p>

            <div className="image grid grid-cols-1 md:grid-cols-2 gap-1 pt-5  md:px-10">
              <div className="">
                <img
                  src={About1}
                  className=" w-full h-full md:h-[600px] rounded-sm"
                />
              </div>
              <div>
                <img
                  src={About2}
                  className="w-full h-full md:h-[600px] rounded-sm"
                />
              </div>
            </div>
            <div className="items-center pt-2">
              <button
                type="submit"
                className="text-center text-sm shadow-2xl font-semibold bg-sky-400 hover:bg-sky-500 text-white items-center rounded w-28 h-7"
                onClick={() => navigate("/aboutus")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
