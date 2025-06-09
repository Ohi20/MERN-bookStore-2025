import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-[#F5F5F5] flex items-center">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-black">
            Review Your Books{" "}
            <span className="text-[#810081] font-semibold">
              For The Best Knowledge
            </span>
          </h2>
          <p className="md:w-4/5 font-semibold text-xl">
            Gain access to a massive audience of book lovers. Philomath is a
            great place to read and promote your books.
          </p>
          {/* <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              search
            </button>
          </div> */}
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
