import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { Books } from "../types/types";
import BooksTable from "../components/BooksTable/BooksTable";

const Home = () => {
    const [books, setBooks] = useState<Books>({
        data: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      axios
        .get("http://localhost:3000/books")
        .then((response) => {
          console.log(response);
          setBooks(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <BooksTable books={books}/>
      )}
    </div>
  );
};

export default Home;
