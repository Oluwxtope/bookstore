
import { Book, Books } from "../../types/types";
import BookRow from "./components/BookRow/BookRow";

type BooksTableProps = {
    books: Books;
}

const BooksTable = ({ books }: BooksTableProps) => {
    return (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
                {books.data.map((book: Book, index: number) => (
                  <BookRow key={book._id}  book={book} index={index} />
                ))}
          </tbody>
        </table>
    )
}

export default BooksTable;
