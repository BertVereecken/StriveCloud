import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-clock"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 6v6l4 2" />
    </Svg>
  );
};

export { ClockIcon };
