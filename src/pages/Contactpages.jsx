function Contactpages() {
  return (
    <div className="contactpage pb-10 bg-gradient-to-r from-rose-200 to-sky-200 to-90%">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-3xl font-semibold justify-items-center items-center text-center pb-3 shadow-2xl shadow-sky-200  ">
          Halaman Contact
        </h1>
        <div className="p-2 items-center justify-items-center grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 ">
          <div className="box w-mx-auto h-[350px] ">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
              className="bg-slate-400 w-full h-full rounded-lg shadow-lg "
            >
              <h1 className="text-center pt-1 font-bold shadow-lg text-white ">
                CONTACT & ALAMAT
              </h1>
              <div className="px-6 py-9">
                <p className="font-semibold text-white text-md  shadow-md shadow-orange-100 mb-1 pb-2">
                  <i className="ri-home-office-fill pr-3 pl-2 "></i>
                  Kelompok Ngasinan
                </p>
                <p className="font-semibold text-white text-md  shadow-md shadow-orange-100 mb-1 pb-2">
                  <i className="ri-school-line pr-3 pl-2 "></i>
                  Masjid Babul Jannah
                </p>
                <p className="font-semibold text-white text-md shadow-md shadow-orange-100 mb-1 pb-2">
                  <i className="ri-community-line pr-3 pl-2"></i>
                  TPA Baabul Jannah
                </p>
                <p className="font-semibold text-white text-md  shadow-md shadow-orange-100 mb-1 pb-2">
                  <i className="ri-phone-fill pr-3 pl-2"></i>
                  081325819354
                </p>
                <p className="font-semibold text-white text-md shadow-md shadow-orange-200 mb-1 pb-2">
                  <i className="ri-map-pin-range-line pr-3 pl-2 text-justify"></i>
                  Ngasinan RT/03,Rw/13 Jebres, Kec. Jebres, Kota Surakarta, Jawa
                  Tengah 57126
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            className="box w-full h-[350px] bg-slate-400 rounded-lg shadow-lg"
          >
            <h1 className="text-center pt-1 font-bold shadow-lg text-white">
              Peta Alamat
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1281902027026!2d110.84841837357638!3d-7.560999474664766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16fc214d767d%3A0xfc14754b5ef464c8!2sMasjid%20Baabul%20Jannah%20LDII!5e0!3m2!1sid!2sid!4v1730740629315!5m2!1sid!2sid"
              className=" w-full h-[320px] rounded-xl shadow-2xl p-2 "
            ></iframe>
          </div>

          {/* <div className="box w-full h-[350px]">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
              className="bg-gradient-to-r from-rose-300 to-sky-300 to-90% w-full h-full rounded-lg shadow-2xl"
            >
              <h1 className="text-center pt-1 font-semibold shadow-lg text-red-600 ">
                Send Message
              </h1>
              <div className="p-4 mx-auto max-w-xl  font-[sans-serif] rounded-lg">
                <form className="mt-2 space-y-4 ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md py-1 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
                  />

                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-1 outline-blue-500"
                  ></textarea>
                  <button
                    type="button"
                    className=" bg-lime-200 tracking-wide rounded-md text-sm px-4 py-1 w-full"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contactpages;
