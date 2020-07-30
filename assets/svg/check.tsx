import React from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-check"
      {...props}
    >
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  );
}

export { CheckboxIcon };
