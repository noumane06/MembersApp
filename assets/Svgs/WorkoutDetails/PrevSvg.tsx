import React from "react";
import { Svg , Path } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const PrevSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 13 12"  width={width} height={height}>
        <Path d="M1 0C1.55 0 2 0.45 2 1V11C2 11.55 1.55 12 1 12C0.45 12 0 11.55 0 11L0 1C0 0.45 0.45 0 1 0ZM4.66 6.82L10.43 10.89C11.09 11.36 12.01 10.88 12.01 10.07V1.93C12.01 1.12 11.1 0.65 10.43 1.11L4.66 5.18C4.52797 5.27216 4.42015 5.39483 4.34569 5.53759C4.27124 5.68036 4.23236 5.83899 4.23236 6C4.23236 6.16101 4.27124 6.31964 4.34569 6.46241C4.42015 6.60517 4.52797 6.72784 4.66 6.82Z" fill={color}/>
      </Svg>
  )
  
}

export default PrevSvg ;

