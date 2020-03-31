import React from "react";
import { render } from "@testing-library/react";

import SearchDetail from "../SearchDetail";

test("Test Search Detail", () => {
  const { getByText } = render(<SearchDetail />);
  const linkElement = getByText(/search detail/i);
  expect(linkElement).toBeInTheDocument();
});
