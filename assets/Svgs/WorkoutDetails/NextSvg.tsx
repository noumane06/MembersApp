import React from "react";
import { Svg , Path } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const NextSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 13 12"  width={width} height={height}>
        <Path d="M12 12C11.45 12 11 11.55 11 11L11 1C11 0.45 11.45 0 12 0C12.55 0 13 0.45 13 1L13 11C13 11.55 12.55 12 12 12ZM8.34 5.18L2.57 1.11C1.91 0.64 0.99 1.12 0.99 1.93L0.99 10.07C0.99 10.88 1.9 11.35 2.57 10.89L8.34 6.82C8.47203 6.72784 8.57985 6.60517 8.65431 6.46241C8.72876 6.31964 8.76764 6.16101 8.76764 6C8.76764 5.83899 8.72876 5.68036 8.65431 5.53759C8.57985 5.39483 8.47203 5.27216 8.34 5.18Z" fill={color}/>
      </Svg>
  )
  
}

export default NextSvg ;


