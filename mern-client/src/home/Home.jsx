import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";
import ListedBooks from "./ListedBooks";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const Home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <FavoriteBooks />
      <ListedBooks />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
