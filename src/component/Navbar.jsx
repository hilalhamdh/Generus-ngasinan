import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow " : "py-4";
  return (
    <>
      <div className={`navbar fixed w-full translate-all ${scrollActive}`}>
        <div className="container mx-auto px-4 ">
          <div className="navbar-box flex items-center justify-between">
            <div className="logo">
              <h1 className=" text-2xl font-bold">GENERUS NGASINAN</h1>
            </div>
            <ul
              className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:py-5 md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 gap-8 md:transition-none fixed ${menuActive} top-1/2 
            -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold
             text-white transition-all`}
            >
              <li className="flex items-center gap-3">
                <i className="ri-home-2-line text-3xl md:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/")}
                  className="font-medium opacity-75"
                >
                  Beranda
                </a>
              </li>
              <li>
                <i className="ri-walk-line text-3xl md:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/mainpages")}
                  className="font-medium opacity-75"
                >
                  Remaja
                </a>
              </li>

              <li>
                <i className="ri-body-scan-line text-3xl md:hidden block"></i>

                <a
                  href="#"
                  onClick={() => navigate("/caberawitkg")}
                  className="font-medium opacity-75"
                >
                  Caberawit
                </a>
              </li>

              <li>
                <i className="ri-image-line text-3xl md:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/imagepages")}
                  className="font-medium opacity-75"
                >
                  Album Generus
                </a>
              </li>
              <li>
                <i className="ri-movie-line text-3xl md:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/videopages")}
                  className="font-medium opacity-75"
                >
                  Video Generus
                </a>
              </li>
              <li>
                <i className="ri-team-line text-3xl md:hidden block"></i>
                <a
                  href="#"
                  onClick={() => navigate("/caberawitpages")}
                  className="font-medium opacity-75"
                >
                  Daftar Generus
                </a>
              </li>
            </ul>
            <div className="social flex  items-center gap-2">
              <a
                href="https://www.instagram.com/generusngasinan_/profilecard/?igsh=c2lkYjQ2MmcwNWx3"
                className=" bg-sky-400 text-center w-[135px] py-2 rounded-full text-white font-bold hover:bg-sky-400 translate-all"
              >
                Social Media
              </a>
              <i
                className="ri-menu-line text-3xl md:hidden block"
                onClick={handleClick}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
