import { Menu as BurgerIcon } from "@styled-icons/remix-fill/Menu";
import styled, { createGlobalStyle } from "styled-components";
import { Menu, Overlay, useOffCanvas } from "styled-off-canvas";
import { Close } from "./components/Close";
import { GitHub } from "./components/GitHub";
import { List } from "./components/List";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: linear-gradient(150deg, rgba(218, 135, 196, 1) 0%, rgba(125, 50, 108, 1) 100%);
    margin: 0;
    min-height: 100%;
  }
`;

const Container = styled.div`
  padding: 40px;
`;

const Icon = styled(BurgerIcon)``;

const IconWrapper = styled.div<{ $isOpen?: boolean }>`
  background: #fff;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.1s ease-in-out;
  transform: ${(props) => (props.$isOpen ? "scale(1.1);" : "none")};

  svg {
    transition: all 0.3s ease-in-out;
    fill: ${(props) => (props.$isOpen ? " rgba(125, 50, 108, 1)" : "inherit")};
    transform: ${(props) =>
      props.$isOpen ? "scale(1.1) rotate(-180deg)" : "none"};
  }

  &:hover {
    transform: scale(1.1);

    svg {
      fill: rgba(125, 50, 108, 1);
      transform: scale(1.1) rotate(-180deg);
    }
  }
`;

const Navigation = () => {
  const { close } = useOffCanvas();

  return (
    <Menu closeOnEsc data-testid="menu">
      <>
        <Close onClose={() => close()} />
        <List />
      </>
    </Menu>
  );
};

const Burger = () => {
  const { isOpen, toggle } = useOffCanvas();

  return (
    <IconWrapper
      $isOpen={isOpen}
      aria-label="Burger"
      onClick={() => {
        toggle();
      }}
    >
      <Icon size={48} />
    </IconWrapper>
  );
};

const App = () => {
  return (
    <Container>
      <GlobalStyle />

      <Burger />

      <Navigation />

      <GitHub />

      <Overlay data-testid="overlay" />
    </Container>
  );
};

export default App;
