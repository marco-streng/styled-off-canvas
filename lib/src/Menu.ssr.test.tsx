// @vitest-environment node

import React from "react";
import TestRenderer from "react-test-renderer";
import { SpyInstance } from "vitest";
import { OffCanvasProvider } from "./Context";
import { Menu } from "./Menu";

describe("Menu", () => {
  let useEffectSpy: SpyInstance;

  beforeEach(() => {
    // useEffect won't run on server
    useEffectSpy = vi.spyOn(React, "useEffect");
    useEffectSpy.mockImplementation(() => vi.fn());
  });

  afterEach(() => {
    useEffectSpy.mockRestore();
  });

  test("ssr", () => {
    const tree = TestRenderer.create(
      <OffCanvasProvider isOpen>
        <Menu>
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
