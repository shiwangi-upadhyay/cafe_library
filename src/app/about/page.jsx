import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-screen bg-gray-100 py-16 px-5 md:px-10">
      {/* Main Section (Image & Text) */}
      <div className="relative flex items-center justify-center w-full h-[90%]">
        <div className="relative">
          {/* Image Section (Pushed Right) */}
          <Image
            weight={300}
            height={300}
            src="/images/bookwall.jpg"
            alt="Descriptive Alt"
            className="w-[300px] sm:w-[400px] md:w-[750px] h-auto shadow-lg transform translate-x-5 md:translate-x-52"
          />

          {/* Overlapping Text */}
          <h1 className="absolute top-[30%] left-[-10%] sm:left-[-15%] md:left-[-20%] transform -translate-y-1/2 text-4xl sm:text-5xl md:text-8xl font-bold leading-tight text-gray-900 z-10 px-4">
            I REALLY
            <br />
            LOVE TO
            <br />
            MAKE BOOK
            <br />
            WALLS
          </h1>
        </div>
      </div>

      {/* Three-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6 px-5 md:px-20">
        {/* Left Column (Smaller) */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold underline">Follow Us</h2>
          <p className="mt-2 underline">Instagram</p>
          <p className="mt-2 underline">Facebook</p>
        </div>

        {/* Middle Column (Equal Width) */}
        <div className="w-full">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec odio ipsum. Suspendisse cursus malesuada facilisis. Mauris in
            mauris ut lacus consequat egestas a sed felis. Nullam nec tellus at
            justo varius placerat. Etiam imperdiet dui a ante faucibus, id
            molestie ex vehicula.
          </p>
        </div>

        {/* Right Column (Equal Width) */}
        <div className="w-full">
          <p className="text-gray-700">
            Duis euismod, ligula ut venenatis tincidunt, ex urna volutpat augue,
            ac posuere nulla mi eu justo. Nam at lacus sed tortor feugiat
            hendrerit. Proin vehicula leo eu ex faucibus, at luctus orci
            suscipit. Donec sit amet tortor et purus vestibulum scelerisque et
            ut ligula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
