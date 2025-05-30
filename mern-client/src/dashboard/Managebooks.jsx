import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Link } from "react-router-dom";

const Managebooks = () => {
  const [allBooks, setAllbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setAllbooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/delete-book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book deleted successfully!!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* form */}

      <Table className="w-[1180px]">
        <TableHead>
          <TableRow>
            <TableHeadCell>No</TableHeadCell>
            <TableHeadCell>Book Name</TableHeadCell>
            <TableHeadCell>Author Name</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>

            <TableHeadCell>
              <span>Edit or Manage</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>

        {allBooks.map((book, index) => (
          <TableBody className="divide-y" key={book._id}>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </TableCell>
              <TableCell>{book.authorName}</TableCell>
              <TableCell>{book.category}</TableCell>

              <TableCell>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 px-4 py-1 text-white font-semibold hover:bg-sky-600"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </div>
  );
};

export default Managebooks;
