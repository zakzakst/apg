import { render } from "@testing-library/react";
import { act, useState } from "react";
import Checkbox, { CheckboxItems } from "./";

// TODO: 余裕ある時に挑戦してみる
// - TestCheckbox作成してテストする方法が正しいか自信ない。他にいい方法がないか考える
const TestCheckbox = () => {
  const [checkboxItems, setCheckboxItems] = useState<CheckboxItems>([
    { id: "check1", label: "Check 1", checked: false },
    { id: "check2", label: "Check 2", checked: false },
  ]);
  return (
    <Checkbox
      legend="Checkbox"
      items={checkboxItems}
      onChange={(items) => setCheckboxItems(items)}
    />
  );
};

describe("Checkbox", () => {
  /**
   * Propsの確認
   */
  it("legendが表示される", () => {
    const { getByText } = render(
      <Checkbox
        legend="Checkbox"
        items={[
          { id: "check1", label: "Check 1", checked: false },
          { id: "check2", label: "Check 2", checked: false },
        ]}
        onChange={() => {}}
      />
    );
    expect(getByText("Checkbox")).toBeInTheDocument();
  });

  it("itemsが表示される", () => {
    const { getByText } = render(
      <Checkbox
        legend="Checkbox"
        items={[
          { id: "check1", label: "Check 1", checked: false },
          { id: "check2", label: "Check 2", checked: false },
        ]}
        onChange={() => {}}
      />
    );
    expect(getByText("Check 1")).toBeInTheDocument();
    expect(getByText("Check 2")).toBeInTheDocument();
  });

  it("classNameが反映される", () => {
    const { container } = render(
      <Checkbox
        legend="Checkbox"
        items={[
          { id: "check1", label: "Check 1", checked: false },
          { id: "check2", label: "Check 2", checked: false },
        ]}
        onChange={() => {}}
        className="custom-class"
      />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  /**
   * 挙動の確認
   */
  it("チェックボックスをクリックすると選択状態が切り替わる", () => {
    const { container } = render(<TestCheckbox />);
    const checkbox1El = container.querySelector("#check1") as HTMLInputElement;

    checkbox1El.click();
    expect(checkbox1El).toBeChecked();

    checkbox1El.click();
    expect(checkbox1El).not.toBeChecked();
  });

  it("全てのチェックボックスが未選択の状態でAllをクリックした時、全てのチェックボックスが選択状態になる。クリックすると、全てのチェックボックスが未選択の状態になる", async () => {
    const { container, getByText } = render(<TestCheckbox />);
    const checkbox1El = container.querySelector("#check1") as HTMLInputElement;
    const checkbox2El = container.querySelector("#check2") as HTMLInputElement;
    const allEl = getByText("All");

    // NOTE: actを使用することで、すべての状態更新が完了するまでテストが待機し、テストが一貫して実行されるようになる
    await act(async () => {
      allEl.click();
    });
    expect(checkbox1El).toBeChecked();
    expect(checkbox2El).toBeChecked();

    await act(async () => {
      allEl.click();
    });
    expect(checkbox1El).not.toBeChecked();
    expect(checkbox2El).not.toBeChecked();
  });

  it("チェックボックス1のみ選択状態でAllをクリックした時、全てのチェックボックスが選択状態になる", async () => {
    const { container, getByText } = render(<TestCheckbox />);
    const checkbox1El = container.querySelector("#check1") as HTMLInputElement;
    const checkbox2El = container.querySelector("#check2") as HTMLInputElement;
    const allEl = getByText("All");

    await act(async () => {
      checkbox1El.click();
      allEl.click();
    });
    expect(checkbox1El).toBeChecked();
    expect(checkbox2El).toBeChecked();
  });
});
