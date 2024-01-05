import { vi } from "vitest";
import { OffCanvasProvider } from "./Context";
import { Overlay } from "./Overlay";
import { fireEvent, render } from "./utils/test-utils";

describe("Overlay", () => {
  test("default", () => {
    const { container } = render(
      <OffCanvasProvider>
        <Overlay />
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("initial open", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Overlay />
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("custom color", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Overlay background="#ccc" />
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("custom opacity", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Overlay opacity={0.555} />
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("custom duration", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Overlay duration="1s" />
      </OffCanvasProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("close on click", () => {
    const { container } = render(
      <OffCanvasProvider isOpen>
        <Overlay />
      </OffCanvasProvider>
    );

    const before = (container.firstChild as any).className;

    fireEvent.click(container.firstChild!);

    expect(before).not.toBe((container.firstChild as any).className);
  });

  test("execute callback", () => {
    const cb = vi.fn();
    const { container } = render(
      <OffCanvasProvider isOpen onClose={cb}>
        <Overlay />
      </OffCanvasProvider>
    );

    fireEvent.click(container.firstChild!);

    expect(cb).toHaveBeenCalled();
  });
});
