import React, { ElementType } from 'react';
import styled from 'styled-components/native';
import { StyledText } from '../styledComponents';

interface ILabelProps {
  label: string | number;
  IconLeft?: ElementType;
  IconRight?: ElementType;
  iconWidth?: string;
  iconHeight?: string;
}

const LabelContainer = styled.View`
  background-color: ${({ bgColor, theme: { orange } }) => bgColor || orange};
  height: fit-content;
  width: fit-content;
  padding: 0.3rem;
  max-width: 8rem;
  max-height: 2rem;
  border-radius: 0.2rem;
  flex-direction: row;
  align-items: center;
`;

const Label = ({ label, IconLeft, IconRight, iconWidth, iconHeight }: ILabelProps) => {
  return (
    <LabelContainer>
      {IconLeft && <IconLeft width={iconWidth} height={iconHeight} />}
      <StyledText numberOfLines={1} size="0.7rem" margin="0 0.5rem 0 0">
        {label}
      </StyledText>
      {IconRight && <IconRight width={iconWidth} height={iconHeight} />}
    </LabelContainer>
  );
};

export { Label };
