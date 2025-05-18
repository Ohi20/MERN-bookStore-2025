import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";

const Home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <FavoriteBooks />
    </div>
  );
};

export default Home;
