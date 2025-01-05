// NOTE: render関数内でreactのhooksを使うため、拡張子をtsxにしている
import type { Meta, StoryObj } from "@storybook/react";
import { fn, expect, userEvent, within } from "@storybook/test";
import { useState } from "react";

import Checkbox from "./index";

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
  // NOTE: 下記の記事を参考に、アロー関数でなくfunctionを使っている
  // https://qiita.com/chan_jun/items/9a4b07fa64db7e4a7bce
  render: function Render({ legend, items }) {
    const [checkboxItems, setCheckboxItems] = useState(items);
    return (
      <Checkbox
        legend={legend}
        items={checkboxItems}
        onChange={(items) => setCheckboxItems(items)}
      />
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const allEl = canvas.getByText("All");
    const getInputSibling = (element: HTMLElement) => {
      return element.closest("li")?.querySelector("input");
    };
    const input1El = getInputSibling(
      canvas.getByText("アイテム1")
    ) as HTMLInputElement;
    const input2El = getInputSibling(
      canvas.getByText("アイテム2")
    ) as HTMLInputElement;

    await step("Tabキーを押して、各項目にフォーカスできる", async () => {
      canvasElement.focus();
      await userEvent.tab();
      expect(allEl).toHaveFocus();
      await userEvent.tab();
      expect(input1El).toHaveFocus();
      await userEvent.tab();
      expect(input2El).toHaveFocus();
    });

    await step(
      "チェックボックス1にフォーカスした状態でspaceキーを押すと選択状態が切り替わる",
      async () => {
        expect(input1El).not.toBeChecked();
        input1El.focus();
        await userEvent.keyboard(" ");
        expect(input1El).toBeChecked();
        await userEvent.keyboard(" ");
        expect(input1El).not.toBeChecked();
      }
    );

    await step(
      "全てのチェックボックスが未選択の状態でAllにフォーカスした状態でspaceキーを押した時、全てのチェックボックスが選択状態になる。再度spaceキーを押すと、全てのチェックボックスが未選択の状態になる",
      async () => {
        expect(input1El).not.toBeChecked();
        expect(input2El).not.toBeChecked();
        expect(allEl).toHaveAttribute("aria-checked", "false");
        allEl.focus();
        await userEvent.keyboard(" ");
        expect(input1El).toBeChecked();
        expect(input2El).toBeChecked();
        expect(allEl).toHaveAttribute("aria-checked", "true");
        await userEvent.keyboard(" ");
        expect(input1El).not.toBeChecked();
        expect(input2El).not.toBeChecked();
        expect(allEl).toHaveAttribute("aria-checked", "false");
      }
    );

    await step(
      "チェックボックス1のみ選択状態でAllにフォーカスした状態でspaceキーを押した時、全てのチェックボックスが選択状態になる",
      async () => {
        input1El.focus();
        await userEvent.keyboard(" ");
        expect(input1El).toBeChecked();
        expect(input2El).not.toBeChecked();
        expect(allEl).toHaveAttribute("aria-checked", "mixed");
        allEl.focus();
        await userEvent.keyboard(" ");
        expect(input1El).toBeChecked();
        expect(input2El).toBeChecked();
        expect(allEl).toHaveAttribute("aria-checked", "true");
      }
    );
  },
};
