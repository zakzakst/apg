import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import Accordion from "./index";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    expanded: { control: "boolean" },
  },
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "通常",
  args: {
    title: "タイトル",
    content: "内容",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const titleEl = canvas.getByText("タイトル");
    const contentEl = canvas.getByText("内容");

    await step("初期表示時は内容が非表示", async () => {
      await expect(contentEl).not.toBeVisible();
    });

    await step("Tabキーを押すとタイトルにフォーカスする", async () => {
      canvasElement.focus();
      await userEvent.tab();
      expect(titleEl).toHaveFocus();
    });

    await step(
      "内容が非表示の時、タイトルにフォーカスした状態でEnterキーを押すと内容が表示される",
      async () => {
        titleEl.focus();
        await userEvent.keyboard("{enter}");
        expect(contentEl).toBeVisible();
      }
    );

    await step(
      "内容が表示されている時、タイトルにフォーカスした状態でEnterキーを押すと内容が非表示になる",
      async () => {
        titleEl.focus();
        await userEvent.keyboard("{enter}");
        expect(contentEl).not.toBeVisible();
      }
    );
  },
};
