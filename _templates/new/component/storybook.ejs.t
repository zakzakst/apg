---
Name: <%= h.capitalize(name) %>
to: src/app/_components/<%= Name %>/<%= Name %>.stories.ts
---
import type { Meta, StoryObj } from "@storybook/react";
// import { expect, userEvent, within } from "@storybook/test";

import <%= Name %> from "./index";

const meta = {
  title: "Components/<%= Name %>",
  component: <%= Name %>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} as Meta<typeof <%= Name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "通常",
  args: {
    title: "タイトル",
  },
};