function Footer() {
  return (
    <div className="footer bg-white shadow mt-16">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4 text-sm">
          &copy; Copyright by{" "}
          <span className="text-sm font-semibold md:font-bold">Hilal Bow</span>
        </p>
        <div className="socila-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-facebook-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-whatsapp-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-tiktok-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
