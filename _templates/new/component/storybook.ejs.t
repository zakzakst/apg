---
to: src/app/_components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.stories.ts
---
import type { Meta, StoryObj } from "@storybook/react";
// import { expect, userEvent, within } from "@storybook/test";

import <%= h.capitalize(name) %> from "./index";

const meta = {
  title: "Components/<%= h.capitalize(name) %>",
  component: <%= h.capitalize(name) %>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} as Meta<typeof <%= h.capitalize(name) %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "通常",
  args: {
    title: "タイトル",
  },
};