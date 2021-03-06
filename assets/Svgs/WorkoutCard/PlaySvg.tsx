import React from "react";
import { Svg , Path } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const PlaySvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 13 14"  width={width} height={height}>
        <Path fill={color} d="M0 5.66667V8.33333C0 11.3105 0 12.799 0.971008 13.3817C1.94202 13.9643 3.25546 13.2638 5.88235 11.8627L8.38235 10.5294L8.38236 10.5294C11.2941 8.97647 12.75 8.2 12.75 7C12.75 5.8 11.2941 5.02353 8.38235 3.47059L5.88235 2.13725C3.25546 0.736246 1.94202 0.0357423 0.971008 0.618347C0 1.20095 0 2.68952 0 5.66667Z"  />
      </Svg>
  )
}

export default PlaySvg ;

