import { ComponentProps } from "react";
import { Book } from "../../../../types/types";
import BookRow from "./BookRow";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

type StoryProps = ComponentProps<typeof BookRow>;

const meta: Meta<StoryProps> = {
  title: "Components/BookRow",
  component: BookRow,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <table>
          <tbody>
            <Story />
          </tbody>
        </table>
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<StoryProps>;

// Mock Data for the BookRow
const mockBook: Book = {
  _id: "1",
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2021,
};

export const Default: Story = {
  args: {
    book: mockBook,
    index: 0,
  },
};
