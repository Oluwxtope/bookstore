import { ComponentProps } from "react";
import Spinner from "./Spinner";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Spinner>;

const meta: Meta<StoryProps> = {
    title: "Components/Spinner",
    component: Spinner,
    argTypes: {
        loading: {
            control: "boolean",
        }
    }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Loading: Story = {
    args: {
        loading: true
    },
};
