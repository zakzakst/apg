import { render } from "@testing-library/react";
import Sample from "./";

describe("Sample", () => {
  it("Sample", () => {
    const { getByText } = render(<Sample />);
    expect(getByText("Sample")).toBeInTheDocument();
  });
});
