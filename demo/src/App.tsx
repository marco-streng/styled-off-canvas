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

const Icon = styled(BurgerIcon)`
  background: #fff;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
`;

const App = () => {
  const { dispatch } = useOffCanvas();
  return (
    <Container>
      <GlobalStyle />

      <Icon
        size={48}
        onClick={() => {
          dispatch({ type: "toggle" });
        }}
      />

      <GitHub />

      <Menu>
        <>
          <Close onClose={() => dispatch({ type: "close" })} />
          <List />
        </>
      </Menu>

      <Overlay />
    </Container>
  );
};

export default App;
