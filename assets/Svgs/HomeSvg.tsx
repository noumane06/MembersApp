import React from "react";
import { Svg , Path  } from "react-native-svg";  

export interface SvgProps {
  width : number , 
  height : number , 
  color : string
}

const HomeSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 23 17" width={width} height={height}>
          <Path d="M20.5 19.5V10.7919L11 2.20813L1.5 10.7919V19.5" stroke={color} strokeWidth='3' />
      </Svg>
  )
}

export default HomeSvg ;
