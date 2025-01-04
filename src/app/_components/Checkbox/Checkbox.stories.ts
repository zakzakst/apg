import type { Meta, StoryObj } from "@storybook/react";
import { fn, expect, userEvent, within } from "@storybook/test";

import Checkbox from "./index";

// TODO: onChangeの際にitemsを更新する処理ができるか調べる（テストコードも併せて対応する ※キーボード対応も）

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    legend: { control: "text" },
  },
  args: {
    onChange: fn(),
  },
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "通常",
  args: {
    legend: "チェックボックス",
    items: [
      { id: "1", label: "アイテム1", checked: false },
      { id: "2", label: "アイテム2", checked: false },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const allEl = canvas.getByText("All");
    const getInputSibling = (element: HTMLElement) => {
      return element.closest("li")?.querySelector("input");
    };
    const input1El = getInputSibling(canvas.getByText("アイテム1"));
    const input2El = getInputSibling(canvas.getByText("アイテム2"));

    await step("Tabキーを押して、各項目にフォーカスできる", async () => {
      canvasElement.focus();
      await userEvent.tab();
      expect(allEl).toHaveFocus();
      await userEvent.tab();
      expect(input1El).toHaveFocus();
      await userEvent.tab();
      expect(input2El).toHaveFocus();
    });

    // await step("アイテム1をクリックするとチェックボックスが選択状態になる", async () => {
    //   expect(item1).not.toBeChecked();
    //   expect(item2).not.toBeChecked();
    //   await canvas.click(item1);
    //   expect(item1).toBeChecked();
    // });

    // await step("アイテム2をクリックするとチェックボックスが選択状態になる", async () => {
    //   expect(item1).not.toBeChecked();
    //   expect(item2).not.toBeChecked();
    //   await canvas.click(item2);
    //   expect(item2).toBeChecked();
    // });
  },
};
