import { useState } from "react";
import { useEffect } from "react";

function SpinnerLoader() {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImg(false);
      setText("Tunggu dalam waktu 3 detik");
    }, 3000);
  }, []);

  return (
    <>
      <div>
        {showImg ? (
          <img className="justify-center items-center" src="./Spinner.gif" />
        ) : (
          <h3>{text}</h3>
        )}
      </div>
    </>
  );
}

export default SpinnerLoader;
