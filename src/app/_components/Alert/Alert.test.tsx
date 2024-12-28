import { render } from "@testing-library/react";
import Alert from "./";

describe("Alert", () => {
  /**
   * Propsの確認
   */
  it("子要素が反映される", () => {
    const { getByText } = render(<Alert isShow>内容</Alert>);
    expect(getByText("内容")).toBeInTheDocument();
  });

  it("isShowがfalseの時、内容のDOMが存在しない", () => {
    const { container } = render(<Alert isShow={false}>内容</Alert>);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("classNameが反映される", () => {
    const { container } = render(
      <Alert isShow className="custom-class">
        内容
      </Alert>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
