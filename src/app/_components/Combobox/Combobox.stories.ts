import type { Meta, StoryObj } from "@storybook/react";
// import { expect, userEvent, within } from "@storybook/test";

import Combobox from "./index";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} as Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "通常",
  args: {
    title: "タイトル",
  },
};