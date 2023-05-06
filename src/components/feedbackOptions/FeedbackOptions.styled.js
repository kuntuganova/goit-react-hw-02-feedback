import styled from '@emotion/styled';

export const ButtonsUl = styled.ul`
  display: flex;
  gap: 3px;
  justify-content: flex-start;
`;

export const Li = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  text-transform: capitalize;
  padding: 10px;
  border: 1px solid thistle;
  border-radius: 5px;
  background-color: antiquewhite;
  font-family: monospace;
  &: hover {
    background-color: #d5afaf;
  }
`;
