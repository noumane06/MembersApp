import React from "react";
import { Svg , Path } from "react-native-svg";  
import { SvgProps } from "./HomeSvg";



const NotificationSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 17 20"  width={width} height={height}>
        <Path d="M1.5 10.5C1.5 6.63401 4.63401 3.5 8.5 3.5C12.366 3.5 15.5 6.63401 15.5 10.5V15.5H1.5V10.5Z" stroke={color} strokeWidth='2' />
        <Path d="M8.5 0.5V4.5" stroke={color} strokeWidth='2' />
        <Path d="M7.5 18.5H9.5" stroke={color} strokeWidth='2'  stroke-linecap="round"/>
      </Svg>
  )
}

export default NotificationSvg ;

