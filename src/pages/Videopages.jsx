import ReactPlayer from "react-player";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { TikTokEmbed } from "react-social-media-embed";

function Videopages() {
  return (
    <>
      <Navbar />
      <div className="videopages  pt-32 bg-gradient-to-r from-rose-100 to-sky-300 to-90%">
        <div className="Container mx-auto  py-5 items-center justify-items-center">
          <div className=" md:w-[1515px] w-[380px] md:h-24 h-16  shadow-white rounded-lg ">
            <h1 className=" items-center md:pt-9 pt-5 pb-4 font-semibold text-center md:text-3xl text-xl  shadow-lg shadow-red-200  ">
              VIDEO KEGIATAN GENERUS
            </h1>
          </div>
          <div className=" pt-1 grid md:grid-cols-2 grid-cols-1  justify-content-center items-center md:gap-2 gap-1  ">
            <div className="flex box items-center justify-items-center bg-white h-[355px] w-[650px] px-2 pb-4 ">
              <ReactPlayer
                url=" https://youtu.be/EXTbSRj_dz0?si=efT8i5BxIsLAiCx_"
                className=" w-full h-[300px] max-w-full pt-4  "
              />
            </div>
            <div className=" flex box items-center justify-items-center  bg-white h-[355px] w-[650px] px-2 pb-4 ">
              <ReactPlayer
                url=" https://youtu.be/OuEwT015NJE?si=a1-8kz9cdRZrKhqO"
                className="w-full h-[300px] max-w-full pt-4"
              />
            </div>
            <div className="flex box items-center justify-items-center  bg-white h-[355px] w-[650px] px-2 pb-4 ">
              <ReactPlayer
                url=" https://youtube.com/shorts/B7GUuYEPozg?si=gSYLPX4KfWugkAXv"
                className="w-full h-[300px] max-w-full pt-4"
              />
            </div>
            <div className="flex box items-center justify-items-center  bg-white h-[355px] w-[650px] px-2 pb-4 rounded-sm ">
              <ReactPlayer
                url=" https://youtube.com/shorts/gUfw4NvEF-c?si=kn4EuflAAEvz_lV-"
                className="w-full h-[300px] max-w-full pt-4 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Videopages;
