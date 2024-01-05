import styled from "styled-components";
import { useOffCanvas } from "./Context";

const Div = styled.div<{
  $isOpen: boolean;
  $background?: string;
  $opacity?: number;
  $duration?: string;
}>(
  ({ $isOpen, $background = "#000", $opacity = 0.3, $duration = "500ms" }) => `
  background: ${$background};
  height: 100%;
  left: 0;
  opacity: ${$isOpen ? $opacity : 0};
  position: fixed;
  top: 0;
  transition: opacity ${$duration} ease-in-out;
  width: 100%;
  z-index: ${$isOpen ? 1 : -1};
`
);

/**
 * Overlay component
 *
 * @param   {string}    className styled-components className for custom styling
 * @returns {component}           React component
 */
export const Overlay = ({
  className,
  background,
  duration,
  opacity,
  ...props
}: {
  background?: string;
  duration?: string;
  opacity?: number;
  className?: string;
}) => {
  const { isOpen, close } = useOffCanvas();

  return (
    <Div
      className={className}
      onClick={() => close()}
      $isOpen={isOpen}
      $background={background}
      $duration={duration}
      $opacity={opacity}
      {...props}
    />
  );
};
