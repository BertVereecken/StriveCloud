import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function PasswordIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="prefix__feather prefix__feather-lock"
      {...props}
    >
      <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
      <Path d="M7 11V7a5 5 0 0110 0v4" />
    </Svg>
  );
}

export { PasswordIcon };
