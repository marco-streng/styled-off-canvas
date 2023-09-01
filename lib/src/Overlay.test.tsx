import { OffCanvasProvider } from "./Context";
import { Overlay } from "./Overlay";
import { render } from "./utils/test-utils";

describe("Overlay", () => {
  test("default", () => {
    const { container } = render(
      <OffCanvasProvider>
        <Overlay />
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
