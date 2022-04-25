import { Link } from "react-router-dom";
import styled from "styled-components";

const SCForm = styled.form`
  width: 475px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BarForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SCLink = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  font-weight: 24px;
  text-decoration: underline;
  color: #4673ca;
`;

const SCButton = styled.button`
  width: max-content;
  padding: 6px 16px;
  background-color: #1976d2;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  ${(props) => props.block && "pointer-events: none; opacity: 0.7;"}
`;

export { SCForm, BarForm, SCLink, SCButton };
