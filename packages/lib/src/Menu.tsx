import React from "react";
import styled from "styled-components";
import { useOffCanvas } from "./Context";

const Container = styled.div<{
  $isOpen: boolean;
  $background?: string;
  $duration?: string;
  $position?: "left" | "right";
  $width?: string;
}>(
  ({
    $isOpen,
    $background = "#fff",
    $duration = "500ms",
    $position = "right",
    $width = "300px",
  }) => `
  background-color: ${$background};
  height: 100%;
  left: ${$position === "left" ? ($isOpen ? 0 : "-100%") : "inherit"};
  max-width: ${$width};
  overflow-y: auto;
  position: fixed;
  right: ${$position === "right" ? ($isOpen ? 0 : "-100%") : "inherit"};
  top: 0;
  transition: ${$position} ${$duration} ease-in-out;
  width: 100%;
  z-index: 10;
`
);

const isCSR = typeof window !== "undefined";

const initalBodyStyle = {
  maxHeight: isCSR ? window.document.body.style.maxHeight : "none",
  overflow: isCSR ? window.document.body.style.overflow : "visbile",
};

/**
 * Menu component
 *
 * @param   {string}    className styled-components className for custom styling
 * @returns {component}           React component
 */
export const Menu = ({
  children,
  background,
  duration,
  position,
  width,
  closeOnEsc,
  className,
  ...props
}: {
  children: React.ReactNode;
  background?: string;
  duration?: string;
  position?: "left" | "right";
  width?: string;
  closeOnEsc?: boolean;
  className?: string;
}) => {
  const { isOpen, close } = useOffCanvas();

  // Avoid scrolling on content when the navigation is open
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const bodyElStyle = window.document.body.style;

    if (isOpen) {
      bodyElStyle.maxHeight = "100%";
      bodyElStyle.overflow = "hidden";
    } else {
      bodyElStyle.maxHeight = initalBodyStyle.maxHeight;
      bodyElStyle.overflow = initalBodyStyle.overflow;
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (!closeOnEsc || typeof window === "undefined") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code.toLowerCase() === "escape") {
        close();
      }
    };

    if (isOpen) {
      window.document.addEventListener("keydown", handleKeyDown);
    } else {
      window.document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeOnEsc, isOpen, close]);

  return (
    <Container
      className={className}
      $background={background}
      $duration={duration}
      $isOpen={isOpen}
      $position={position}
      $width={width}
      {...props}
    >
      {children}
    </Container>
  );
};
