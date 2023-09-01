import { OffCanvasProvider } from "./Context";
import { Menu } from "./Menu";
import { fireEvent, render } from "./utils/test-utils";

describe("Menu", () => {
  test("closed", () => {
    const { container } = render(
      <OffCanvasProvider>
        <Menu>
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("initial open", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Menu>
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("custom color", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Menu background="#000">
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("custom duration", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Menu duration="1s">
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("position left", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Menu position="left">
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("position left closed", () => {
    const { container } = render(
      <OffCanvasProvider>
        <Menu position="left">
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("closeOnEsc", () => {
    const cb = vi.fn();
    const { container } = render(
      <OffCanvasProvider isOpen onClose={cb}>
        <Menu closeOnEsc>
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );

    const before = (container.firstChild as any).className;

    fireEvent.keyDown(container, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });

    expect(before).not.toBe((container.firstChild as any).className);
  });

  test("closeOnEsc callback", () => {
    const cb = vi.fn();
    const { container } = render(
      <OffCanvasProvider isOpen onClose={cb}>
        <Menu closeOnEsc>
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );

    fireEvent.keyDown(container, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });

    expect(cb).toHaveBeenCalled();
  });

  test("closeOnEsc with another key", () => {
    const cb = vi.fn();
    const { container } = render(
      <OffCanvasProvider isOpen onClose={cb}>
        <Menu>
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );

    fireEvent.keyDown(container, {
      key: "a",
      code: "KeyA",
      keyCode: 65,
      charCode: 65,
    });

    expect(cb).not.toHaveBeenCalled();
  });

  test("body styling", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Menu closeOnEsc>
          <div>content</div>
        </Menu>
      </OffCanvasProvider>
    );

    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.style.maxHeight).toBe("100%");

    // Close
    fireEvent.keyDown(container, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });

    expect(document.body.style.overflow).toBe("");
    expect(document.body.style.maxHeight).toBe("");
  });
});
