import React, { useState } from 'react';
import { CheckBoxProps } from 'react-native';
import { StyledText } from '../styledComponents';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface CheckboxFieldProps extends CheckBoxProps {
  label: string;
  Icon: any;
}

const Wrapper = styled(RectButton)`
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  width: fit-content;
`;

const CheckBoxWrapper = styled.View`
  border: 1px solid black;
  width: 1rem;
  height: 1rem;
  align-items: center;
  border-color: ${({ checked, theme: { checkboxBackground } }) =>
    checked ? 'transparent' : checkboxBackground};
  background-color: ${({ checked, theme: { checkboxBackground } }) =>
    checked ? checkboxBackground : 'transparent'};
`;

const Checkbox = ({ label, Icon }: CheckboxFieldProps) => {
  const [checked, setChecked] = useState(true);

  const toggleCheckBox = () => setChecked(!checked);
  return (
    <Wrapper onPress={toggleCheckBox}>
      <CheckBoxWrapper checked={checked}>
        {checked && (
          <Icon stroke={checked && 'white'} width="0.9rem" height="0.9rem" />
        )}
      </CheckBoxWrapper>
      <StyledText size="0.8rem" padding="0 1rem">
        {label}
      </StyledText>
    </Wrapper>
  );
};

export { Checkbox };
