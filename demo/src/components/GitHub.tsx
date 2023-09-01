import styled from "styled-components";

import { Github } from "@styled-icons/remix-fill/Github";

const Icon = styled(Github)`
  bottom: 40px;
  color: #fff;
  left: 52px;
  position: absolute;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const GitHub = () => (
  <a
    href="https://github.com/marco-streng/styled-off-canvas"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={36} />
  </a>
);
