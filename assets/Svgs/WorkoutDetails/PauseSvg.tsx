import React from "react";
import { Svg , Rect } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const PauseSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 12 16"  width={width} height={height}>
        <Rect width="5" height="16" rx="1.5" fill={color}/>
        <Rect x="7" width="5" height="16" rx="1.5" fill={color}/>
      </Svg>
  )
  
}

export default PauseSvg ;

