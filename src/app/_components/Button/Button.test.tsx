import { render } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  /**
   * Propsの確認
   */
  it("ボタンのテキストが表示される", () => {
    const { getByText } = render(<Button>ボタン</Button>);
    expect(getByText("ボタン")).toBeInTheDocument();
  });

  it("pressedが反映される", () => {
    const { container } = render(<Button pressed>ボタン</Button>);
    expect(container.querySelector("button")).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });

  it("disabledが反映される", () => {
    const { container } = render(<Button disabled>ボタン</Button>);
    expect(container.querySelector("button")).toHaveAttribute(
      "aria-disabled",
      "true"
    );
  });

  it("haspopupが反映される", () => {
    const { container } = render(<Button haspopup>ボタン</Button>);
    expect(container.querySelector("button")).toHaveAttribute(
      "aria-haspopup",
      "true"
    );
  });

  it("classNameが反映される", () => {
    const { container } = render(
      <Button className="custom-class">ボタン</Button>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  /**
   * 挙動の確認
   */
  it("ボタンがクリックされた時にonClickが呼ばれる", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>ボタン</Button>);
    getByText("ボタン").click();
    expect(onClick).toHaveBeenCalled();
  });
});
