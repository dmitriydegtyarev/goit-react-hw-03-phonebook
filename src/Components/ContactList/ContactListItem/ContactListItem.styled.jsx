import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 10px;

  button {
    width: 100px;
    padding: 2px;
    margin-right: 20px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      border-color: red;
    }
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
