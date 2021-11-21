import React from "react";
import { Svg , Path , Rect   } from "react-native-svg";  
import { SvgProps } from "./HomeSvg";



const ScanSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
    <Svg fill="none"  viewBox="0 0 40 40"  width={width} height={height}>
        <Rect x="12" y="12" width="4" height="4" stroke={color} strokeWidth="2"/>
        <Rect x="12" y="24" width="4" height="4" stroke={color} strokeWidth="2"/>
        <Rect x="24" y="12" width="4" height="4" stroke={color} strokeWidth="2"/>
        <Path d="M20 13V17" stroke={color} strokeWidth="2"/>
        <Path d="M20 25V29" stroke={color} strokeWidth="2"/>
        <Path d="M11 20H13" stroke={color} strokeWidth="2"/>
        <Path d="M23 20H25" stroke={color} strokeWidth="2"/>
        <Path d="M23 24H25" stroke={color} strokeWidth="2"/>
        <Path d="M25 22H27" stroke={color} strokeWidth="2"/>
        <Path d="M21 26H25" stroke={color} strokeWidth="2"/>
        <Path d="M25 28H27" stroke={color} strokeWidth="2"/>
        <Path d="M27 20H29" stroke={color} strokeWidth="2"/>
        <Path d="M28 23V27" stroke={color} strokeWidth="2"/>
        <Path d="M17 20H20V23" stroke={color} strokeWidth="2"/>
    </Svg>
  )
}

export default ScanSvg ;