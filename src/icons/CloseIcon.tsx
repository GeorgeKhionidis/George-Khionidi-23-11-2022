import React, {memo} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

import type {SvgProps} from 'react-native-svg';

type IProps = SvgProps;

export const CloseIcon: React.FC<IProps> = memo(props => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <Circle
      cx={14.773}
      cy={14.773}
      r={12.568}
      fill="#14142B"
      stroke="#fff"
      strokeWidth={3.591}
    />
    <Path
      d="m18.863 11.246-7.618 7.617m0-7.617 7.618 7.617"
      stroke="#FCFCFC"
      strokeWidth={1.795}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
));
