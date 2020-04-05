import React from "react";
import { render } from "@testing-library/react";

import Location from "../Location";

import { locations } from "./testData";

locations.forEach((props) =>
  test("Test Location Wrapper", () => {
    const { getByText } = render(<Location {...props} />);
    const linkElement = getByText(props?.value);
    expect(linkElement).toBeInTheDocument();
  })
);
