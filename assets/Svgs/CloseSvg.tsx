import React from "react";
import { Svg , Path  } from "react-native-svg";  

export interface SvgProps {
  width : number , 
  height : number , 
  color : string
}

const CloseSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 14 15" width={width} height={height}>
          <Path fillRule="evenodd" clipRule="evenodd" fill={color} d="M0.32376 0.823723C0.75539 0.392092 1.4552 0.392092 1.88683 0.823723L7 5.93691L12.1132 0.823723C12.5448 0.392092 13.2446 0.392092 13.6762 0.823723C14.1079 1.25535 14.1079 1.95517 13.6762 2.3868L8.56307 7.49998L13.6763 12.6132C14.1079 13.0448 14.1079 13.7446 13.6763 14.1763C13.2446 14.6079 12.5448 14.6079 12.1132 14.1763L7 9.06306L1.88679 14.1763C1.45516 14.6079 0.755352 14.6079 0.323722 14.1763C-0.107907 13.7446 -0.107907 13.0448 0.323722 12.6132L5.43693 7.49998L0.32376 2.3868C-0.10787 1.95517 -0.10787 1.25535 0.32376 0.823723Z" />
      </Svg>
  )
}

export default CloseSvg ;

