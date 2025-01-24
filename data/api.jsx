import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
function Api() {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/images")
      .then((res) => {
        console.log(res);
        setApi(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsErr(true);
      });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
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
                src=""
                // data-aos="zoom-in"
                // data-aos-duration="2000"
                alt="Halaman Homepage"
                className="md:w-full w-[400px]  mx-auto md:m-0  rounded-xl  shadow-lg shadow-white  h-[450px] md:h-[550px] "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mainpage pt-5 bg-gradient-to-r from-rose-200 to-sky-300 to-90% ">
        <div className="container mx-auto px-4 py-2 ">
          <h1 className="text-center lg:text-4xl/tight text-2xl font-semibold shadow-2xl shadow-sky-200">
            Kabar Berita
          </h1>
          <div className="main grid md:grid-cols-4 grid-cols-1 items-center gap-10 pt-10 ">
            {isLoading && <div className="text-blue-600 ">Loading....</div>}
            {isErr && (
              <div className="text-red-500">Terjadi kesalahan akses api</div>
            )}
            {api.map((api) => {
              return (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg bg-white "
                  key={api.id}
                >
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="w-full h-[300px]"
                    src={(api.image = "1")}
                    alt="Lebaran Bersama"
                  />

                  <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2">
                      {api.title}
                      <p className="text-gray-700 text-base text-justify line-clamp-5 hover:line-clamp-none ">
                        {api.content}
                      </p>
                      <p>
                        jalankan api : npx json-server --watch data/db.json
                        --port 8000
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Api;
