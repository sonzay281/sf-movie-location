import React from "react";
import { render } from "@testing-library/react";

import CreditLine from "../CreditLine";

test("Test Credit Line Cameraman and Sanjaya Sapkota", () => {
  const { getByText } = render(
    <CreditLine label="Cameraman" value="Sanjaya Sapkota" />
  );
  const linkElement = getByText(/Sanjaya Sapkota/i);
  const linkElement1 = getByText(/Cameraman/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
