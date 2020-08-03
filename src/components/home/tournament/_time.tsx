import React, { ElementType, useCallback } from 'react';
import { StyledText } from '../../common';
import { Row } from '../../common/styledComponents';

interface ITimeProps {
  time: string;
  Icon?: ElementType;
  color?: string;
  onlyDisplayTime?: boolean;
}

const Time = React.memo(({ time, Icon, color, onlyDisplayTime }: ITimeProps) => {
  const formattedTime = useCallback(() => {
    const unformattedDate = new Date(time);

    if (onlyDisplayTime) {
      const newTime = unformattedDate.toLocaleString('nl-BE', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      return newTime;
    } else {
      const newDate = unformattedDate.toLocaleString('nl-BE', {
        hour12: false,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      return newDate;
    }
  }, [time, onlyDisplayTime]);

  return (
    <Row>
      {Icon && <Icon style={{ marginRight: '0.3rem', color }} />}
      <StyledText color={color}>{formattedTime()}</StyledText>
    </Row>
  );
});

export { Time };
