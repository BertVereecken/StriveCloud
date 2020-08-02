import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  justify-content: space-between;
`;

export const BodyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  padding: 0 2rem;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${({ align }) => align || 'flex-start'};
  margin: ${({ margin }) => margin || 0};
  align-items: center;
`;

export const Box = styled.View`
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || '100%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin: ${({ margin }) => margin || '0'};
  border-radius: ${({ radius }) => radius || '0'};
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
`;
