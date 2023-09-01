import { Close as CloseIcon } from "@styled-icons/remix-fill/Close";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 10px 20px 10px;
  text-align: right;
`;

const Icon = styled(CloseIcon)`
  color: #333;
  cursor: pointer;
  text-align: center;
`;

export const Close = ({ onClose }: { onClose: () => void }) => (
  <Wrapper data-test="xxx">
    <Icon onClick={onClose} size={36} />
  </Wrapper>
);
