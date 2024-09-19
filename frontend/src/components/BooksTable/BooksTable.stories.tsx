import { ComponentProps } from "react";
import { Book } from "../../types/types";
import BooksTable from "./BooksTable";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

type StoryProps = ComponentProps<typeof BooksTable>;

const meta: Meta<StoryProps> = {
  title: "Components/BooksTable",
  component: BooksTable,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<StoryProps>;

// Mock Data for the BooksTable
const mockBooks: Book[] = [
  { _id: "1", title: "Book One", author: "Author One", publishedYear: 2001 },
  { _id: "2", title: "Book Two", author: "Author Two", publishedYear: 2002 },
  {
    _id: "3",
    title: "Book Three",
    author: "Author Three",
    publishedYear: 2003,
  },
];

export const Default: Story = {
  args: {
    books: {
      data: mockBooks,
    },
  },
};
