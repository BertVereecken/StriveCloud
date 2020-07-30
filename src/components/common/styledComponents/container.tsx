import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  justify-content: space-between;
`;
