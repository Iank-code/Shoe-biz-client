import {expect, test} from "vitest"
import { render, screen } from "@testing-library/react";
import { nav_top_url } from "./../../../src/utils/helpers/url.helper";

test("Testing nav_top_url",()=>{
    expect(nav_top_url.length).toEqual(5)
    expect(nav_top_url).toEqual([
      "New Arrivals",
      "Men",
      "Ladies",
      "Kids",
      "Brands",
    ]);
})