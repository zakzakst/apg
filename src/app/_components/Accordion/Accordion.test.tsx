import React from "react";
import {
  render,
  // fireEvent,
} from "@testing-library/react";
import Accordion from "./";

describe("Accordion", () => {
  it("エラーが起きずに描画される", () => {
    const { getByText } = render(
      <Accordion
        id="accordion"
        title="タイトル"
        content="内容"
        expanded
        titleTag="h2"
      />
    );
    expect(getByText("タイトル")).toBeInTheDocument();
  });

  // it("toggles content visibility when clicked", () => {
  //   const { getByText, queryByText } = render(
  //     <Accordion title="Test Title">Test Content</Accordion>
  //   );
  //   const titleElement = getByText("Test Title");

  //   // Initially, content should not be visible
  //   expect(queryByText("Test Content")).not.toBeInTheDocument();

  //   // Click to open
  //   fireEvent.click(titleElement);
  //   expect(getByText("Test Content")).toBeInTheDocument();

  //   // Click to close
  //   fireEvent.click(titleElement);
  //   expect(queryByText("Test Content")).not.toBeInTheDocument();
  // });

  // it("applies custom className", () => {
  //   const { container } = render(
  //     <Accordion title="Test Title" className="custom-class">
  //       Test Content
  //     </Accordion>
  //   );
  //   expect(container.firstChild).toHaveClass("custom-class");
  // });
});
