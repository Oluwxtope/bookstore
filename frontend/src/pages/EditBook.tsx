import { useEffect, useState } from "react";
import { Book } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import Spinner from "../components/Spinner/Spinner";
import axios from "axios";
import { FiX } from "react-icons/fi";

const EditBook = () => {
  const [oldBook, setOldBook] = useState<Book>({
    title: "",
    author: "",
    publishedYear: "",
  });
  const [newBook, setNewBook] = useState<Book>({
    title: "",
    author: "",
    publishedYear: "",
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      axios
        .get(`http://localhost:3000/books/${id}`)
        .then((res) => {
          console.log(res);
          setOldBook(res.data.book);
          setNewBook(res.data.book);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchBook();
  }, [id]);

  const inputSpacingClass = "my-4";
  const inputFieldClearButtonInlineClass = "flex items-center";
  const labelClass = "text-xl mr-4 text-gray-500";
  const inputClass = "border-2 border-gray-500 px-4 py-2 w-full";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: name === "publishedYear" ? Number(value) : value,
    }));
  };

  const handleEditBook = () => {
    const data = newBook;
    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error has occured. Please check console");
        console.log(err);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent entering "e", "+", "-", or "." in the number input field
    if (
      e.key === "e" ||
      e.key === "E" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "."
    ) {
      e.preventDefault();
    }
  };

  const handleClearInput = (fieldName: keyof Book) => {
    setNewBook((prevBook) => ({ ...prevBook, [fieldName]: "" }));
  };

  const handleClearAll = () => {
    setNewBook({
      title: "",
      author: "",
      publishedYear: "", // Reset to empty string
    });
  };

  const handleReset = () => {
    setNewBook(oldBook);
  };

  return (
    <div className="p-4">
      <BackButton destination="/" />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner loading={loading} /> : ""}
      <div className="flex flex-col border-2 border-sky-400 ronded-xl w-[600px] p-4 mx-auto">
        <div className={inputSpacingClass}>
          <label className={labelClass}>Title</label>
          <div className={inputFieldClearButtonInlineClass}>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleChange}
              placeholder="Enter book title"
              className={inputClass}
            />
            <button
              type="button"
              className="right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => handleClearInput("title")}
            >
              <FiX />
            </button>
          </div>
        </div>
        <div className={inputSpacingClass}>
          <label className={labelClass}>Author</label>
          <div className={inputFieldClearButtonInlineClass}>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleChange}
              placeholder="Enter book author"
              className={inputClass}
            />
            <button
              type="button"
              className="right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => handleClearInput("author")}
            >
              <FiX />
            </button>
          </div>
        </div>
        <div className={inputSpacingClass}>
          <label className={labelClass}>Published Year</label>
          <div className={inputFieldClearButtonInlineClass}>
            <input
              type="number"
              name="publishedYear"
              value={newBook.publishedYear}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              placeholder="Enter book published year"
              className={`${inputClass} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
            />
            <button
              type="button"
              className="right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => handleClearInput("publishedYear")}
            >
              <FiX />
            </button>
          </div>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save Book
        </button>
        <button className="p-2 bg-red-300 m-8" onClick={handleClearAll}>
          Clear All
        </button>
        <button className="p-2 bg-yellow-300 m-8" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default EditBook;
