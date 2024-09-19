import { ComponentProps } from "react";
import { StoryObj, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for Link
import BackButton from "./BackButton"; // Adjust the import path

type StoryProps = ComponentProps<typeof BackButton>;

export default {
  title: "Components/BackButton",
  component: BackButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<StoryProps>;

export const Back: Story = {
    args: {
        destination: "/"
    },
};
