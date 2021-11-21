import React from "react";
import { Svg , Path    } from "react-native-svg";  
import { SvgProps } from "./HomeSvg";



const PackageSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 25 22"  width={width} height={height}>
        <Path d="M12.5 1.6577L23.5 8.07437V13.9215L12.5 20.2465L1.5 13.9215V8.07437L12.5 1.6577Z" stroke={color} strokeWidth='2' />
        <Path d="M13.5 13.5L22.5 8.5" stroke={color} strokeWidth='2' />
      </Svg>
  )
}

export default PackageSvg ;




