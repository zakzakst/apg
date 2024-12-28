import { render } from "@testing-library/react";
import Breadcrumb, { BreadcrumbItems } from "./";

describe("Breadcrumb", () => {
  const items: BreadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/sample", label: "Sample" },
  ];

  /**
   * Propsの確認
   */
  it("パンくずの項目が表示される", () => {
    const { getByText } = render(<Breadcrumb items={items} />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Products")).toBeInTheDocument();
    expect(getByText("Sample")).toBeInTheDocument();
  });

  it("ariaLabelが反映される", () => {
    const { container } = render(
      <Breadcrumb items={items} ariaLabel="パンくず" />
    );
    expect(container.querySelector("nav")).toHaveAttribute(
      "aria-label",
      "パンくず"
    );
  });

  it("classNameが反映される", () => {
    const { container } = render(
      <Breadcrumb className="custom-class" items={items} />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  /**
   * 挙動の確認
   */
  it('最後のパンくずに"aria-current"が付与される', () => {
    const { getByText } = render(<Breadcrumb items={items} />);
    expect(getByText("Home")).not.toHaveAttribute("aria-current");
    expect(getByText("Products")).not.toHaveAttribute("aria-current");
    expect(getByText("Sample")).toHaveAttribute("aria-current", "page");
  });
});
