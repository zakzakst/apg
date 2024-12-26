import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Accordion from "./";

describe("Accordion", () => {
  /**
   * Propsの確認
   */
  it("titleが反映される", () => {
    const { getByText } = render(<Accordion title="タイトル" content="内容" />);
    expect(getByText("タイトル")).toBeInTheDocument();
  });

  it("contentが反映される", () => {
    const { getByText } = render(<Accordion title="タイトル" content="内容" />);
    expect(getByText("内容")).toBeInTheDocument();
  });

  it("expandedが反映される", () => {
    const { getByText } = render(
      <Accordion title="タイトル" content="内容" expanded />
    );
    const buttonElement = getByText("タイトル").closest("button");
    expect(buttonElement).toHaveAttribute("aria-expanded", "true");
    const contentElement = getByText("内容").closest("[role='region']");
    expect(contentElement).not.toHaveAttribute("hidden");
  });

  it("titleTagが反映される", () => {
    const { getByText } = render(
      <Accordion title="タイトル" content="内容" titleTag="h2" />
    );
    const titleElement = getByText("タイトル").closest("h2");
    expect(titleElement).toBeInTheDocument();
  });

  it("classNameが反映される", () => {
    const { container } = render(
      <Accordion className="custom-class" title="タイトル" content="内容" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  /**
   * 操作の確認
   */
  it("アコーディオンが開閉する", () => {
    const { getByText } = render(<Accordion title="タイトル" content="内容" />);
    const buttonElement = getByText("タイトル").closest("button") as Element;
    const contentElement = getByText("内容").closest("[role='region']");

    // 初期表示時にアコーディオンが閉じている
    expect(buttonElement).toHaveAttribute("aria-expanded", "false");
    expect(contentElement).toHaveAttribute("hidden");

    // ボタンをクリックするとアコーディオンが開く
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute("aria-expanded", "true");
    expect(contentElement).not.toHaveAttribute("hidden");

    // 再度ボタンをクリックするとアコーディオンが閉じる
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute("aria-expanded", "false");
    expect(contentElement).toHaveAttribute("hidden");
  });
});
