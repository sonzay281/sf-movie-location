import React from "react";
import { render } from "@testing-library/react";

import SearchDetail from "../SearchDetail";
import { locations, movieDetail } from "./testData";

const testProps = {
  locations,
  movieDetail,
  isCollapsed: true,
  onCollapse: () => {},
};

test("Test Search Detail", () => {
  const { getByText } = render(<SearchDetail {...testProps} />);
  const linkElement1 = getByText(locations[0].value);
  const linkElement2 = getByText(/Josh Hartnett/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
