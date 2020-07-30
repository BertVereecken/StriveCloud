import styled from 'styled-components/native';

const StyledTitle = styled.Text`
  font-family: 'SFPro-Semibold';
  font-size: ${({ size }) => size};
  text-align: center;
  margin: ${({ margin }) => margin || '1rem 0'};
`;

const StyledText = styled.Text`
  color: ${({ color }) => color || 'black'};
  font-family: 'SFPro-Regular';
  font-size: ${({ size }) => size};
  text-align: center;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export { StyledTitle, StyledText };
