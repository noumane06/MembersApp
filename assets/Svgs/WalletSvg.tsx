import React from "react";
import { Svg , Path , Rect   } from "react-native-svg";  
import { SvgProps } from "./HomeSvg";



const WalletSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 23 17"  width={width} height={height}>
        <Rect x="1.5" width={width} height={height} rx="4" stroke={color} strokeWidth='2' />
        <Path d="M6.5 6.5H16.5" stroke={color} strokeWidth='2'  stroke-linecap="square"/>
      </Svg>
  )
}

export default WalletSvg ;
