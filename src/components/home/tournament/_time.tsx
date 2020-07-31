import React, { ElementType } from 'react';
import { StyledText } from '../../common';
import { Row } from '../../common/styledComponents';

interface ITimeProps {
  time: string;
  Icon: ElementType;
  color?: string;
}

const Time = ({ time, Icon, color }: ITimeProps) => {
  const formattedTime = () => {
    const unformattedDate = new Date(time);
    const newDate = unformattedDate.toLocaleString('nl-BE', {
      hour12: false,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return newDate;
  };

  return (
    <Row>
      {Icon && <Icon style={{ marginRight: '0.3rem', color }} />}
      <StyledText color={color}>{formattedTime()}</StyledText>
    </Row>
  );
};

export { Time };
