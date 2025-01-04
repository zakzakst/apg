---
to: src/app/_components/<%= name %>/<%= name %>.stories.ts
---
import type { Meta, StoryObj } from "@storybook/react";
// import { expect, userEvent, within } from "@storybook/test";

import <%= name %> from "./index";

const meta = {
  title: "Components/<%= name %>",
  component: <%= name %>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} as Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "通常",
  args: {
    title: "タイトル",
  },
};