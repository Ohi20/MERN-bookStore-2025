import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";

const Editbooks = () => {
  const id = useParams();

  const {
    bookTitle,
    authorName,
    category,
    bookDescription,
    imageURL,
    bookPdfURL,
  } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non Fiction",
    "Mystery",
    "Science Fiction",
    "Programming",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "Self Help",
    "History",
    "Memories",
    "Children Books",
    "Business",
    "Travel",
    "Religion",
    "Art & Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleValueSelected = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfURL,
    };

    fetch(`http://localhost:8000/update-book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded successfully!!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit A Book</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle">Book Title</Label>
            </div>
            <TextInput
              id="bookTitle"
              type="bookTitle"
              name="bookTitle"
              placeholder="bookTitle"
              defaultValue={bookTitle}
              required
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName">Author Name</Label>
            </div>
            <TextInput
              id="authorName"
              type="authorName"
              name="authorName"
              placeholder="authorName"
              defaultValue={authorName}
              required
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="bookCategory">
                Category
              </Label>
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="rounded w-full"
              value={selectedBookCategory}
              onChange={handleValueSelected}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription">Description</Label>
            </div>
            <Textarea
              id="bookDescription"
              type="bookDescription"
              name="bookDescription"
              className="w-full"
              placeholder="bookDescription"
              defaultValue={bookDescription}
              required
              rows={5}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL">Book Image</Label>
            </div>
            <TextInput
              id="imageURL"
              type="imageURL"
              name="imageURL"
              placeholder="imageURL"
              defaultValue={imageURL}
              required
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfURL">Book PDF</Label>
            </div>
            <TextInput
              id="bookPdfURL"
              type="bookPdfURL"
              name="bookPdfURL"
              placeholder="bookPdfURL"
              defaultValue={bookPdfURL}
              required
            />
          </div>
        </div>

        <Button className="w-1/2 mt-5" type="submit">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default Editbooks;
