import { render } from "@testing-library/react";
import { useState } from "react";
import Checkbox, { CheckboxItems } from "./";

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
  // TODO: useStateのテスト方法がわからない。どうやってテストすればいいのか調査する
  // it("チェックボックスをクリックすると選択状態が切り替わる", () => {
  //   const [checkboxItems, setCheckboxItems] = useState<CheckboxItems>([
  //     { id: "check1", label: "Check 1", checked: false },
  //     { id: "check2", label: "Check 2", checked: false },
  //   ]);
  //   const { container } = render(
  //     <Checkbox
  //       legend="Checkbox"
  //       items={checkboxItems}
  //       onChange={(items) => setCheckboxItems(items)}
  //     />
  //   );
  //   const checkbox1El = container.querySelector("#check1") as HTMLInputElement;
  //   checkbox1El.click();
  //   expect(checkbox1El).toBeChecked();
  //   checkbox1El.click();
  //   expect(checkbox1El).not.toBeChecked();
  // });

  // it("全てのチェックボックスが未選択の状態でAllをクリックした時、全てのチェックボックスが選択状態になる。クリックすると、全てのチェックボックスが未選択の状態になる", () => {});

  // it("チェックボックス1のみ選択状態でAllをクリックした時、全てのチェックボックスが選択状態になる", () => {});
});
