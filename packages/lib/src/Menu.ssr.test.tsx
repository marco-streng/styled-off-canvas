// @vitest-environment node

import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { OffCanvasProvider } from "./Context";
import { Menu } from "./Menu";

describe("Menu", () => {
  test("ssr", () => {
    const sheet = new ServerStyleSheet();

    const html = renderToString(
      sheet.collectStyles(
        <OffCanvasProvider isOpen>
          <Menu>
            <div>content</div>
          </Menu>
        </OffCanvasProvider>
      )
    );

    const styles = sheet.getStyleTags();
    sheet.seal();

    // Verify the menu renders with content
    expect(html).toContain("content");
    // Verify styled-components generated styles
    expect(styles).toBeTruthy();
    expect(html).toMatchSnapshot();
  });
});
