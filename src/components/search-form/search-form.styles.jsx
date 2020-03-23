import styled from 'styled-components';

export const styles = {
  width: 300,
  margin: '0 auto'
};

export const StyledInput = styled.input`
  width: 100%;
  background: inherit;
  border: none;
  padding: 15px;

  &:focus {
    border: none;
    outline: none;
  }
`;