import React from "react";
import { render } from "@testing-library/react";

import Marker from "../Marker";

test("Test Map Marker", () => {
  const { getByText } = render(
    <Marker isInfoVisible={true}>
      <h1>This is info.</h1>
    </Marker>
  );
  const linkElement = getByText(/This is info/i);
  expect(linkElement).toBeInTheDocument();
});
