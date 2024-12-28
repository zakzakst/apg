import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./index";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    isShow: { control: "boolean" },
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "通常",
  args: {
    children: "内容",
    isShow: true,
  },
};
