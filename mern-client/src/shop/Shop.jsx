import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-28">
      <h2 className="text-5xl text-center font-bold">All Books Are Here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Link to={book.bookPdfUR}>
            <Card className="max-w-sm">
              <img src={book.imageURL} alt="" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
              <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.authorName}
              </h4>
              <p>{book.category}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.bookDescription}
              </p>

              <button className="bg-blue-700 font-semibold py-2 text-white rounded">
                Details
              </button>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
