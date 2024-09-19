import { useEffect, useState } from "react";
import { Book } from "../types/types";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton/BackButton";
import Spinner from "../components/Spinner/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState<Book>({
    _id: "",
    title: "",
    author: "",
    publishedYear: 0,
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      axios
        .get(`http://localhost:3000/books/${id}`)
        .then((res) => {
          console.log(res);
          setBook(res.data.book);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchBook();
  }, [id]);

  return (
    <div className="p-4">
      <BackButton destination={"/"} />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Published Year</span>
              <span>{book.publishedYear}</span>
            </div>
            {/* <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Created Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Last Updated Time</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div> */}
        </div>
      )}
    </div>
  );
};

export default ShowBook;
