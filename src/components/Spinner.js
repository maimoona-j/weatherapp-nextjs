import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <>
      <Image
        className="bg-black bg-opacity-50 flex items-center justify-center fixed left-[650px] right-0 bottom-0 top-56 z-50"
        src="/spinner.svg"
        alt="loading.."
        width={200}
        height={200}
      />
    </>
  );
};

export default Spinner;
