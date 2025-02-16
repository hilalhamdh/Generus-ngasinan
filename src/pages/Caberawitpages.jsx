import Navbar from "../component/Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// import Zuhal from "/images/19.jpg";
// import Talita from "/images/A.jpg";
// import Kika from "/images/KIKA.jpg";
// import Yuan from "/images/YUAN.jpg";

// import Hilal from "/images/hilall.jpg";

import Footer from "../component/Footer";
const foto = [
  {
    id: 1,
    image: "/images/HH.jpg",
    name: "Andita Nola Hafidzah",
    kelas: "Caberawit",
  },
  {
    id: 2,
    image: "/images/A.jpg",
    name: "Talita Azmi",
    kelas: "Caberawit",
  },
  {
    id: 3,
    image: "/images/YUAN.jpg",
    name: "Acnaf Yuan",
    kelas: "Caberawit",
  },
  {
    id: 4,
    image: "/images/KIKA.jpg",
    name: "Aqiqa",
    kelas: "Caberawit",
  },
  {
    id: 5,
    image: "/images/asnan.jpg",
    name: "Asnan",
    kelas: "Caberawit",
  },
  {
    id: 6,
    image: "/images/vava.jpg",
    name: "Vava",
    kelas: "Caberawit",
  },
  {
    id: 7,
    image: "/images/izza.jpg",
    name: "Izza",
    kelas: "Caberawit",
  },
  {
    id: 8,
    image: "/images/bila.jpg",
    name: "Bila",
    kelas: "Caberawit",
  },
  {
    id: 9,
    image: "/images/aisyah.jpg",
    name: "Aisyah",
    kelas: "Caberawit",
  },
  {
    id: 10,
    image: "/images/atira.jpg",
    name: "Atira",
    kelas: "Caberawit",
  },
  {
    id: 11,
    image: "",
    name: "Atira",
    kelas: "Caberawit",
  },
];

const Caberawitpages = () => {
  return (
    <>
      <Navbar />
      <div className="caberawitpages pt-32 bg-gradient-to-r from-rose-100 to-sky-300 to-90%">
        <div className="container mx-auto px-4 md:py-2 py-1 items-center justify-items-center">
          <div className=" md:w-[1450px] w-[350px] md:h-24 h-16   shadow-white rounded-lg ">
            <h1 className=" items-center md:pt-9 pt-5 pb-4 font-semibold text-center md:text-3xl text-xl  shadow-lg shadow-red-200  ">
              GENERUS NGASINAN 2024 - 2025
            </h1>
          </div>
          <div className=" md:pt-8 pt-4 grid md:grid-cols-4 grid-cols-1 gap-4 ">
            {foto.map((foto) => (
              <div key={foto.id}>
                <div className="">
                  <Card className="w-[350px]">
                    <CardHeader floated={false} className="h-[350px]">
                      <img src={foto.image} alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {foto.name}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="font-medium"
                        textGradient
                      >
                        {foto.kelas}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Caberawitpages;
