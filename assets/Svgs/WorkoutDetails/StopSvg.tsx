import React from "react";
import { Svg , Rect } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const StopSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 13 12"  width={width} height={height}>
        <Rect x="12" y="12" width="12" height="12" rx="2" transform="rotate(-180 12 12)" fill={color}/>
      </Svg>
  )
  
}

export default StopSvg ;
